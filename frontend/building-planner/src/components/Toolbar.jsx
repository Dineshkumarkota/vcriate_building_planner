import { useTool } from "../context/ToolContext";
import { saveDrawing, loadDrawing } from "../services/api";


const Toolbar = ({ shapes, setShapes }) => {
  const { activeTool, setActiveTool } = useTool();

  const tools = ["draw", "select", "view"];
  
  const handleSave = async () => {
    const id = await saveDrawing(shapes);
    if (id) alert(`✅ Saved! Drawing ID: ${id}`);
  };

  const handleLoad = async () => {
    const id = prompt("Enter Drawing ID to Load:");
    if (id) {
      const loadedShapes = await loadDrawing(id);
      setShapes(loadedShapes);
    }
  };


  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      {tools.map((tool) => (
        <button
          key={tool}
          onClick={() => setActiveTool(tool)}
          style={{
            padding: "8px 16px",
            backgroundColor: activeTool === tool ? "#007bff" : "#f0f0f0",
            color: activeTool === tool ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {tool.toUpperCase()}
        </button>
      ))}

      <button onClick={handleSave}>💾 Save</button>
      <button onClick={handleLoad}>⬇️ Load</button>
    </div>
  );
};

export default Toolbar;
