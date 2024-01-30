import { useHelper } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface LightProps {}

function Light({}: LightProps) {
  const lightRef = useRef<THREE.DirectionalLight>(null!);
  useHelper(lightRef, THREE.DirectionalLightHelper, 3, 0x000000);

  const targetRef = useRef(null);
  const [target, setTarget] = useState();

  useEffect(() => {
    if (targetRef.current) setTarget(targetRef.current);
  }, []);

  return (
    <directionalLight
      ref={lightRef}
      castShadow
      args={[0xffffff, 5]}
      position={[4, 4, 4]}
      shadow-camera-left={-25}
      shadow-camera-right={25}
      shadow-camera-top={25}
      shadow-camera-bottom={-25}
      shadow-camera-near={0.1}
      shadow-camera-far={1000}
      shadow-mapSize-width={4096}
      shadow-mapSize-height={4096}
    />
    // <pointLight args={[0xffffff, 10, 10, 1]} position-y={2} castShadow />
    // <spotLight
    //   args={[0xffffff, 100, 100, Math.PI / 3, 1, 1]}
    //   castShadow
    //   position={[3, 3, 3]}
    // />
    // <SpotLight
    //   color={0xffffff}
    //   intensity={10}
    //   distance={100}
    //   angle={Math.PI / 2}
    //   penumbra={1}
    //   decay={0.5}
    //   anglePower={100}
    //   attenuation={5}
    //   radiusTop={10}
    //   radiusBottom={5}
    //   opacity={1}
    //   volumetric
    //   debug
    //   castShadow
    //   position={[3, 3, 3]}
    //   target={target}
    // />
  );
}

export default Light;
