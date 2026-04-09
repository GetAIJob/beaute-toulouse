import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

interface BlobProps {
  position: [number, number, number]
  color: string
  scale: number
  distort: number
  speed: number
  floatSpeed: number
  floatIntensity: number
}

function Blob({ position, color, scale, distort, speed, floatSpeed, floatIntensity }: BlobProps) {
  return (
    <Float speed={floatSpeed} rotationIntensity={0.25} floatIntensity={floatIntensity}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 80, 80]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.1}
          metalness={0.04}
          transparent
          opacity={0.82}
        />
      </mesh>
    </Float>
  )
}

function MouseResponsiveGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!groupRef.current) return
    // Slow lerp toward pointer for elegant mouse response
    groupRef.current.rotation.x +=
      (pointer.y * 0.08 - groupRef.current.rotation.x) * 0.04
    groupRef.current.rotation.y +=
      (pointer.x * 0.08 - groupRef.current.rotation.y) * 0.04
  })

  return <group ref={groupRef}>{children}</group>
}

export default function BlobScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      {/* Soft spa-toned lighting */}
      <ambientLight intensity={1.8} color="#F8F5EE" />
      <pointLight position={[4, 3, 4]} intensity={1.5} color="#D1D5BE" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#C4B59A" />
      <pointLight position={[0, 5, -2]} intensity={0.5} color="#EDE6DA" />

      <MouseResponsiveGroup>
        {/* Primary blob — sage green, large */}
        <Blob
          position={[1.6, 0.4, 0]}
          color="#C8CDB6"
          scale={1.85}
          distort={0.38}
          speed={1.6}
          floatSpeed={1.4}
          floatIntensity={0.7}
        />
        {/* Secondary blob — warm sand */}
        <Blob
          position={[-1.6, -0.3, -1]}
          color="#C4B59A"
          scale={1.45}
          distort={0.42}
          speed={1.2}
          floatSpeed={1.8}
          floatIntensity={0.9}
        />
        {/* Accent blob — creamy white */}
        <Blob
          position={[0.4, -1.8, -0.5]}
          color="#EDE8DD"
          scale={1.05}
          distort={0.32}
          speed={1.9}
          floatSpeed={2.2}
          floatIntensity={1.1}
        />
        {/* Small accent — sage deep */}
        <Blob
          position={[-0.6, 2.0, -1.5]}
          color="#A8AE94"
          scale={0.65}
          distort={0.45}
          speed={2.2}
          floatSpeed={2.5}
          floatIntensity={1.3}
        />
      </MouseResponsiveGroup>
    </Canvas>
  )
}
