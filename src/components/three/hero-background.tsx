"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Float } from "@react-three/drei"
import * as THREE from "three"

function Particles() {
  const mesh = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      const radius = 10 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0003
      mesh.current.rotation.y += 0.0003
    }
  })

  return (
    <Points ref={mesh} positions={positions}>
      <PointMaterial
        size={0.02}
        transparent
        opacity={0.8}
        color="#2563eb"
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 opacity-50 dark:opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5}>
          <Particles />
        </Float>
      </Canvas>
    </div>
  )
}
