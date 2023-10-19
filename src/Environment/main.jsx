import { Canvas } from "@react-three/fiber"
import ReactDOM from "react-dom/client"
import Experience from "./Experience"
import { Loader } from "@react-three/drei"
import Sidepage from "./libs/Sidepage"
import { userStore } from "./store/store"

function ExperiencePage() {
  return (
    <>
      <Canvas
        className="experience_canvas"
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 1],
        }}
      >
        <Experience />
      </Canvas>
      {/* page sidebar */}
      <Sidepage />
      <Loader />
    </>
  )
}
export default ExperiencePage
