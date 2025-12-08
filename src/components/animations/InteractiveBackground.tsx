'use client'

import { Canvas, useFrame, type GroupProps } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useState, type ComponentProps } from 'react'
import type { Group } from 'three'
import * as random from 'maath/random/dist/maath-random.esm'

type StarsProps = ComponentProps<typeof Points>

function Stars(props: StarsProps) {
  const ref = useRef<Group | null>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group ref={ref as unknown as GroupProps['ref']} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}