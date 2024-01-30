import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

interface GLBModelProps {}

function GLBModel({}: GLBModelProps) {
  //   const three = useThree();
  const ref = useRef(null!);

  const { scene, animations } = useGLTF("/dancer.glb");
  const { actions } = useAnimations(animations, ref);

  const [currentAnimation, setCurrentAnimation] = useState("wave");

  useEffect(() => {
    scene.traverse((obj) => {
      //@ts-ignore
      if (obj?.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    if (actions?.["wave"]) actions?.["wave"].play();
  }, [actions, scene]);

  //   useFrame(() => {});

  useEffect(() => {
    actions[currentAnimation]?.fadeIn(0.5).play();

    return () => {
      actions[currentAnimation]?.fadeOut(0.5).stop();
    };
  }, [currentAnimation]);

  return (
    <primitive
      onClick={() => {
        setCurrentAnimation((prev) => {
          if (prev == "wave") return "windmill";
          return "wave";
        });
      }}
      onPointerUp={() => {
        console.log("up");
      }}
      onPointerDown={() => {
        console.log("down");
      }}
      ref={ref}
      scale={0.01}
      object={scene}
      position-y={0.8}
    />
  );
}

export default GLBModel;
