import React, { useRef } from "react"; // Import useRef
import "./Navbar.css";

function Navbar() {
  const fileInputRef = useRef(null); // Ref for the file input

  const handleUpload = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the uploaded file here (e.g., process it, display it in Three.js)
    console.log("Uploaded file:", file); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Product Configurator</div>
      <input
        type="file"
        accept=".glb, .gltf" // Only allow .glb and .gltf files
        style={{ display: "none" }} // Hide the input element
        ref={fileInputRef} // Reference to trigger the click programmatically
        onChange={handleFileChange} // Handle file selection
      />
      <button className="upload-button" onClick={handleUpload}>
        Upload Model
      </button>
    </nav>
  );
}

export default Navbar;
