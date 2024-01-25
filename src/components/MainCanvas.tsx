import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import Controls from "./Controls";
import Light from "./Light";
import Meshes from "./Meshes";
import GLBModel from "./GLBModel";
import { Dancer } from "./Dancer";
import PostProcessor from "./PostProcessor";
import { Physics } from "@react-three/cannon";
import MeshesCannon from "./MeshesCannon";

interface MainCanvasProps {}

function MainCanvas({}: MainCanvasProps) {
  return (
    <Canvas
      gl={{ antialias: true }}
      shadows
      camera={{
        fov: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 100,
        position: [5, 5, 5],
      }}
      scene={{ background: new Color(0x000000) }}
    >
      <Controls />
      <Light />
      {/* <PostProcessor /> */}
      <Physics
        gravity={[0, -9, 0]}
        defaultContactMaterial={{ restitution: 0.1, friction: 1 }}
      >
        <MeshesCannon />
      </Physics>
      {/* <Meshes /> */}
      {/* <GLBModel /> */}
      {/* <Dancer /> */}
    </Canvas>
  );
}

export default MainCanvas;
