import { OrbitControls } from "@react-three/drei";

interface ControlsProps {}

function Controls({}: ControlsProps) {
  return (
    <OrbitControls
      enableDamping
      dampingFactor={0.3}
      //   enableZoom
      //   enablePan
      //   autoRotate
    />
  );
}

export default Controls;
