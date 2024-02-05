import "./App.css";
import { DisplayLocations } from "./DisplayLocations";
import { createPortal } from "react-dom";

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayLocations />
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.getElementById("modal") || document.body
      )}
    </div>
  );
}

export default App;
