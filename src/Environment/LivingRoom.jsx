import React from "react"
import { useGLTF } from "@react-three/drei"
import Point from "./libs/Point"
import Tags from "./libs/Tags"
// import environment from "../Assets/Living_room.glb"
export function Model(props) {
  const { nodes } = useGLTF("/Living_room.glb")

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />

      <Point position={[2, -0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Tags value={1} />
      </Point>

      <Point position={[2, -0.5, -1.5]} rotation={[0, -Math.PI / 2, 0]}>
        <Tags value={2} />
      </Point>

      <Point position={[1.5, -0.3, -2.8]} rotation={[0, -Math.PI / 4, 0]}>
        <Tags value={2} />
      </Point>

      <Point position={[2.2, -0.3, -2.9]} rotation={[0, -Math.PI / 6, 0]}>
        <Tags value={4444} />
      </Point>
    </group>
  )
}

useGLTF.preload("/Living_room.glb")
