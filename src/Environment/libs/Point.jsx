import { Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"
import * as THREE from "three"

/**
 * ! Avoid changes in this component,
 * you can pass props from outside the component
 * and it works like regular HTML and react component
 */

const Point = ({ children, ...props }) => {
  const ref = useRef()
  // This holds the local occluded state
  const [isOccluded, setOccluded] = useState()
  const [isInRange, setInRange] = useState()
  const isVisible = isInRange && !isOccluded
  // Test distance
  const vec = new THREE.Vector3()
  useFrame((state) => {
    const range =
      state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <= 10
    if (range !== isInRange) setInRange(range)
  })
  return (
    <group ref={ref}>
      <Html
        transform
        occlude
        onOcclude={setOccluded}
        style={{
          transition: "scale 0.2s",
          visibility: isVisible ? "visible" : "hidden",
          transform: `scale(${isVisible ? 1 : 0.25})`,
        }}
        {...props}
      >
        {children}
      </Html>
    </group>
  )
}

export default Point
