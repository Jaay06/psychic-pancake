import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Center,
} from "@react-three/drei"
import React, { Suspense } from "react"
import { Model } from "./LivingRoom"

//! avoid changes in this component as well

const Experience = () => {
  return (
    <>
      {/* perfomance monitor */}
      {/* <Perf position="top-left" /> */}
      {/* controls */}
      <color attach="background" args={["black"]} />
      <OrbitControls
        makeDefault
        keyPanSpeed={0}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* lights */}
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight />
      <Suspense fallback={null}>
        <Center>
          <Model />
        </Center>
      </Suspense>
      {/* * This part is used in know the direction of model in the DOM  */}
      {/* !comment this part out on production so users dont see it */}
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport />
      </GizmoHelper>
    </>
  )
}

export default Experience
