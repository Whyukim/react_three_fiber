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
import * as THREE from "three";

interface MeshesProps {}

function Meshes({}: MeshesProps) {
  return (
    <>
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Plane>
      <Box args={[1, 1, 1]} castShadow position={[2, 0.5, 1]}>
        <meshStandardMaterial color={0xff0000} />
      </Box>
      <Sphere args={[1]} position={[0, 1, 3]} material-color={0x00ff00} />
      <Circle
        args={[1]}
        position={[0, 1, -1]}
        material-color={"violet"}
        material-side={THREE.DoubleSide}
      />
      <Cone args={[1]} position={[3, 1, 3]} material-color={"brown"} />
      <Cylinder
        args={[2, 1, 1]}
        position={[3, 1, -3]}
        material-color={"skyblue"}
      />
      <Torus
        args={[1, 0.2]}
        position={[-3, 1.2, -3]}
        material-color={"hotpink"}
      />
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-4, 2, 3]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={"yellow"} roughness={0.5} metalness={1} />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-8, 2, 3]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial
          color={"yellow"}
          emissive={0x0abff0}
          emissiveIntensity={0.5}
        />
      </TorusKnot>
    </>
  );
}

export default Meshes;
