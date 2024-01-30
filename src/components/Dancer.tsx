/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/dancer.glb -o src/components/Dancer.tsx 
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Ch03: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    Ch03_Body: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "breakdance01"
  | "breakdancingEnd"
  | "breakdanceFootworkToIdle"
  | "uprock"
  | "windmill"
  | "wave"
  | "hiphop01"
  | "twerk"
  | "hiphop02";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;

export function Dancer(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const [currentAnimation, setCurrentAnimation] = useState("wave");
  const { scene, nodes, materials, animations } = useGLTF(
    "/dancer.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

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
    // @ts-ignore
    actions[currentAnimation]?.fadeIn(0.5).play();

    return () => {
      // @ts-ignore
      actions[currentAnimation]?.fadeOut(0.5).stop();
    };
  }, [currentAnimation]);

  return (
    <group
      // @ts-ignore
      ref={group}
      onClick={() => {
        setCurrentAnimation((prev) => {
          if (prev == "wave") return "windmill";
          return "wave";
        });
      }}
      scale={0.01}
      position-y={0.8}
      {...props}
      dispose={null}
    >
      <group name="AuxScene">
        <group position={[0, -82.942, -1.295]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials.Ch03_Body}
            skeleton={nodes.Ch03.skeleton}
          >
            <meshStandardMaterial color={0xffaa00} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dancer.glb");
