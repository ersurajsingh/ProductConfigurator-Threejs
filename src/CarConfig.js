import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import Lambo from "./Lambo";
import "./styles.css"; 

const state = proxy({
  current: null,
  items: {
    WhiteCar: "#D49D19",
  },
});

function ColorPicker() {
  const snap = useSnapshot(state);
  return (
    <div>
      <HexColorPicker
        color={snap.items["WhiteCar"]}
        onChange={(color) => (state.items["WhiteCar"] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}

function CarConfig() {
  return (
    <div className="configurator-container">
    <h1>Car Configurator</h1>
    <p>Change car color</p>
    <ColorPicker />
      <Canvas style={{ width: "95vw", height: "80vh", background: "#ffffff" }}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Lambo scale={0.014} state={state} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default CarConfig;
