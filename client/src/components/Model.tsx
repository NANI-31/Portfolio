import {
  useGLTF,
  Text3D,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef, useLayoutEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/shards.glb") as any;

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children.map((mesh: any, i: number) => {
        return <Mesh data={mesh} key={i} />;
      })}
      <Font />
    </group>
  );
}

function Font() {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      // You can calculate the width of the text using its geometry
      const boundingBox = new THREE.Box3().setFromObject(textRef.current);
      const width = boundingBox.max.x - boundingBox.min.x;
      console.log(width);
      setTextWidth(width);
    }
  }, []);
  const src = "/fonts/PPNeueMontreal_Regular.json";
  const textOption = {
    color: "white",
    anchorX: "center",
    anchorY: "middle",
  };
  const textConfig = {
    font: "/fonts/PP Neue Montreal_Regular.json",
    // scale: 0.0,
    letterSpacing: -0.03,
    height: 0.25,
    bevelEnabled: true,
    bevelSize: 0.02,
    bevelThickness: 0.01,
    bevelSegments: 10,
    curveSegments: 128,
  };
  const materialConfig = {
    // backside: true,
    // backsideThickness: 0.3,
    // transmission: 1,
    // thickness: 0.3,
    // chromaticAberration: 5,
    // ior: 1.5,
    color: "#fff",
    side: THREE.DoubleSide,
    roughness: 0,
    metalness: 0,
    // emissive: '#ffaa00',
    emissiveIntensity: 5,
    transparent: true,
    reflectivity: 0.5,
    // refractionRatio: 0.98,
  };
  return (
    <group position={[0, 0, -0.1]}>
      <Text3D
        scale={0.3}
        ref={textRef}
        position={[-textWidth / 2, 0, 0]}
        {...textConfig}
        anchorX="left"
        anchorY="middle"
      >
        404
        <meshStandardMaterial {...materialConfig} />
      </Text3D>
      <Text3D
        scale={0.02}
        position={[-textWidth / 2, -0.15, 0]} // Adjust position slightly for second line of text
        {...textConfig}
        anchorX="left"
        anchorY="middle"
      >
        The link is broken
      </Text3D>
    </group>
  );
}

function Mesh({ data }: { data: any }) {
  const materialProps = useControls({
    thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.75, min: 0, max: 1 },
    resolution: { value: 300 },
  });

  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          {...materialProps}
        />
      </mesh>
    </Float>
  );
}
