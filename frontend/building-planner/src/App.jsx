import { useState } from "react";
import Toolbar from "./components/Toolbar";
import CanvasArea from "./components/CanvasArea";
import { ToolProvider } from "./context/ToolContext";

const App = () => {
  const [shapes, setShapes] = useState([]);

  return (
    <ToolProvider>
      <div style={{ padding: "20px" }}>
        <h2>🏗️ Building Planner</h2>
        <Toolbar shapes={shapes} setShapes={setShapes} />
        <CanvasArea shapes={shapes} setShapes={setShapes} />
      </div>
    </ToolProvider>
  );
};

export default App;
