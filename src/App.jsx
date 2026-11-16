import { Activity, AudioWaveform, Brain, Github, Scan, Shield, Sparkles } from 'lucide-react'
import AnatomyViewer from './components/AnatomyViewer.jsx'
import CameraPanel from './components/CameraPanel.jsx'
import './App.css'

export default function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark"><Scan size={21} /></span><span>NEURO<span className="brand-accent">VISION</span><small>AI X-RAY MIRROR</small></span></a>
        <div className="topbar-right"><span className="system-status"><i /> SYSTEM READY</span><a className="github-link" href="https://github.com/RAO10311/ai-xray-mirror" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> INTERACTIVE VISUAL EXPERIENCE</div>
          <h1>See beyond the <span>surface.</span></h1>
          <p>An X-ray-inspired mirror interface combining a live camera preview with a stylized 3D anatomy visualization.</p>
        </div>
        <div className="hero-chip"><Activity size={16} /> REAL-TIME VISUAL MODE</div>
      </section>

      <section className="workspace-grid">
        <CameraPanel />
        <section className="panel anatomy-panel">
          <div className="panel-heading">
            <div><div className="eyebrow">3D MODEL</div><h2>Anatomy Explorer</h2></div>
            <span className="model-tag">INTERACTIVE</span>
          </div>
          <AnatomyViewer />
          <div className="anatomy-footer"><span><i className="dot-cyan" /> Stylized anatomy model</span><span>3D PREVIEW</span></div>
        </section>
      </section>

      <section className="info-grid">
        <article className="info-card"><span className="info-icon"><Brain size={20} /></span><div><h3>Visual learning</h3><p>Explore a glowing, wireframe-inspired anatomy model in 3D.</p></div></article>
        <article className="info-card"><span className="info-icon"><AudioWaveform size={20} /></span><div><h3>Live camera</h3><p>Preview your camera with an optional visual filter.</p></div></article>
        <article className="info-card"><span className="info-icon"><Shield size={20} /></span><div><h3>Privacy first</h3><p>Camera processing stays in your browser session.</p></div></article>
      </section>

      <footer className="footer"><span>NEUROVISION AI · BUILT FOR LEARNING & EXPLORATION</span><span className="disclaimer">Educational visual demo only — not a real X-ray or medical diagnostic tool.</span></footer>
    </main>
  )
}