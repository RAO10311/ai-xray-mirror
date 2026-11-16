import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

function AnatomyModel() {
  const group = useRef(null)
  useFrame((state) => {
    if (group.current) group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.22
  })

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}>
      <group ref={group}>
        <mesh position={[0, 0.72, 0]}>
          <sphereGeometry args={[0.72, 32, 32]} />
          <meshStandardMaterial color="#9cecff" wireframe transparent opacity={0.62} />
        </mesh>
        <mesh position={[0, 0.72, 0.02]} scale={[0.47, 0.52, 0.47]}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshBasicMaterial color="#54d8ff" wireframe transparent opacity={0.22} />
        </mesh>
        {Array.from({ length: 7 }).map((_, i) => (
          <mesh key={i} position={[0, 0.5 - i * 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.53 - i * 0.035, 0.012, 6, 48]} />
            <meshBasicMaterial color="#6ee7ff" transparent opacity={0.7} />
          </mesh>
        ))}
        <mesh position={[0, -0.65, 0]} scale={[0.35, 0.7, 0.28]}>
          <capsuleGeometry args={[0.28, 0.7, 8, 16]} />
          <meshStandardMaterial color="#5bdcff" wireframe transparent opacity={0.45} />
        </mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} position={[side * 0.66, -0.25, 0]} rotation={[0, 0, side * -0.35]}>
            <capsuleGeometry args={[0.09, 0.72, 6, 12]} />
            <meshBasicMaterial color="#83eaff" wireframe />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export default function AnatomyViewer() {
  return (
    <div className="anatomy-canvas">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }}>
        <ambientLight intensity={1.3} />
        <pointLight position={[3, 3, 4]} intensity={2} color="#79e6ff" />
        <AnatomyModel />
        <OrbitControls enablePan={false} minDistance={3} maxDistance={6} />
      </Canvas>
      <div className="canvas-hint">DRAG TO ROTATE · SCROLL TO ZOOM</div>
    </div>
  )
}