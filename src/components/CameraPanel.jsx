import { useEffect, useRef, useState } from 'react'
import { Camera, CameraOff, ScanFace, ShieldCheck } from 'lucide-react'

export default function CameraPanel() {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [active, setActive] = useState(false)
  const [xray, setXray] = useState(true)
  const [error, setError] = useState('')

  async function startCamera() {
    setError('')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
      setActive(true)
    } catch {
      setError('Camera access was blocked or no camera was found. Check browser permissions and try again.')
    }
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
    if (videoRef.current) videoRef.current.srcObject = null
    setActive(false)
  }

  useEffect(() => () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
  }, [])

  return (
    <section className="panel camera-panel">
      <div className="panel-heading">
        <div>
          <div className="eyebrow">LIVE INPUT</div>
          <h2>Mirror View</h2>
        </div>
        <span className={active ? 'live-pill live' : 'live-pill'}><span />{active ? 'CAMERA ON' : 'STANDBY'}</span>
      </div>
      <div className={`camera-stage ${xray ? 'xray-mode' : ''} ${active ? 'camera-active' : ''}`}>
        <video ref={videoRef} playsInline muted />
        {!active && (
          <div className="camera-placeholder">
            <div className="camera-icon"><Camera size={30} /></div>
            <strong>Your mirror preview</strong>
            <span>Start your camera to see the live view</span>
          </div>
        )}
        <div className="scan-frame"><i /><i /><i /><i /></div>
        <div className="scan-line" />
        <div className="camera-label"><ScanFace size={14} /> VISUAL FILTER PREVIEW</div>
      </div>
      {error && <p className="error-text">{error}</p>}
      <div className="camera-controls">
        {!active ? (
          <button className="primary-btn" onClick={startCamera}><Camera size={17} /> Start camera</button>
        ) : (
          <button className="secondary-btn" onClick={stopCamera}><CameraOff size={17} /> Stop camera</button>
        )}
        <button className={xray ? 'toggle-btn selected' : 'toggle-btn'} onClick={() => setXray((v) => !v)}>
          {xray ? 'X-ray filter: ON' : 'X-ray filter: OFF'}
        </button>
      </div>
      <div className="privacy-note"><ShieldCheck size={15} /> Camera stays in this browser. No video is uploaded.</div>
    </section>
  )
}