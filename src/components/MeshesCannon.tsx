import { useBox } from "@react-three/cannon";
import {
  Box,
  Circle,
  Cone,
  Cylinder,
  Plane,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

interface MeshesCannonProps {}

function MeshesCannon({}: MeshesCannonProps) {
  const [planeRef] = useBox<any>(() => ({
    args: [50, 1, 50],
    type: "Static",
    mass: 1,
    position: [0, 0, 0],
    material: {
      restitution: 1,
      friction: 0.5,
    },
    onCollide: () => {
      console.log("바닥에 충돌");
    },
  }));

  const [boxRef, api] = useBox<any>(() => ({
    args: [1, 1, 1],
    mass: 1,
    position: [-1, 5, 0],
    material: {
      restitution: 0.4,
      friction: 0.2,
    },
  }));

  const [sphereRef, sphereApi] = useBox<any>(() => ({
    args: [1, 1, 1],
    mass: 5,
    position: [0, 2, 0],
    material: {
      restitution: 0.4,
      friction: 0.2,
    },
  }));

  useEffect(() => {
    // sphereApi.applyForce([555, 50, 0], [1, 0, 0]);
    // sphereApi.applyLocalForce([555, 50, 0], [1, 0, 0]);
  }, []);
  return (
    <>
      <Box ref={planeRef} args={[50, 1, 50]} receiveShadow>
        <meshStandardMaterial />
      </Box>

      <Box
        ref={boxRef}
        castShadow
        args={[1, 1, 1]}
        // position-y={1}
      >
        <meshStandardMaterial
          color={0xff0000}
          roughness={0.3}
          metalness={0.6}
        />
      </Box>

      <Sphere ref={sphereRef}>
        <meshStandardMaterial
          color={0xff00ff}
          roughness={0.3}
          metalness={0.6}
        />
      </Sphere>
    </>
  );
}

export default MeshesCannon;
