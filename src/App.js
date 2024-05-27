import React from "react";
import ShoeConfig from "./ShoeConfig";
import CarConfig from "./CarConfig";
import Navbar from "./navbar";
import "./styles.css"; // Your shared styles

function App() {
  return (
    <div>
      <Navbar />
      <main className="configurator-section">
        <ShoeConfig />
        <CarConfig />
      </main>
    </div>
  );
}

export default App;
