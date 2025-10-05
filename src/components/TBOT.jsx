"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Float } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/tbot.glb");
  const { viewport } = useThree();

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <group scale={viewport.width / 36}>
        <primitive
          object={scene}
          rotation={[0.15, 4.7, 0]}
          position={[0, -4.1, 0]}
        />
      </group>
    </Float>
  );
}

const TBOT = ({ isDrag, setIsDrag }) => {
  return (
    <div
      className={`w-full h-[100svh] absolute top-1/2 left-1/2 -translate-1/2 ${
        isDrag ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <Canvas camera={{ position: [0, 0, 9], fov: 40 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          onStart={() => setIsDrag(true)}
          onEnd={() => setIsDrag(false)}
        />
      </Canvas>
    </div>
  );
};

export default TBOT;
useGLTF.preload("/models/tbot.glb");