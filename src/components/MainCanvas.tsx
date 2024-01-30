import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import Controls from "./Controls";
import Light from "./Light";
import Meshes from "./Meshes";
import GLBModel from "./GLBModel";
import { Dancer } from "./Dancer";

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
      <Meshes />
      {/* <GLBModel /> */}
      <Dancer />
    </Canvas>
  );
}

export default MainCanvas;
