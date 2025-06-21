import { useState, useEffect } from "react";
import { useTool } from "../context/ToolContext";

const CanvasArea = ({ shapes, setShapes }) => {
  const { activeTool } = useTool();
  
  const [drawing, setDrawing] = useState(null);

  const [selectedId, setSelectedId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mouse Down
  const handleMouseDown = (e) => {
    const svg = e.target.closest("svg");
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (activeTool === "draw") {
      setDrawing({ x: mouseX, y: mouseY, width: 0, height: 0 });
    }

    if (activeTool === "select") {
      setSelectedId(null); // Deselect if clicked empty space
    }
  };

  // Mouse Move
  const handleMouseMove = (e) => {
    const svg = e.target.closest("svg");
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Moving shape
    if (isDragging && selectedId !== null && activeTool === "select") {
      const updated = [...shapes];
      updated[selectedId].x = mouseX - offset.x;
      updated[selectedId].y = mouseY - offset.y;
      setShapes(updated);
      return;
    }

    // Drawing shape
    if (drawing && activeTool === "draw") {
      setDrawing({
        ...drawing,
        width: mouseX - drawing.x,
        height: mouseY - drawing.y,
      });
    }
  };

  // Mouse Up
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      return;
    }

    if (drawing && activeTool === "draw") {
      setShapes([...shapes, drawing]);
      setDrawing(null);
    }
  };

  // Delete shape with Delete key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Delete" && selectedId !== null) {
        const filtered = shapes.filter((_, idx) => idx !== selectedId);
        setShapes(filtered);
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, shapes]);

  return (
    <svg
      width="100%"
      height="600px"
      style={{ border: "1px solid #ccc", backgroundColor: "#fefefe" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {shapes.map((shape, index) => {
        const isSelected = selectedId === index;

        return (
          <g key={index}>
            <rect
              x={Math.min(shape.x, shape.x + shape.width)}
              y={Math.min(shape.y, shape.y + shape.height)}
              width={Math.abs(shape.width)}
              height={Math.abs(shape.height)}
              fill={isSelected ? "rgba(255, 0, 0, 0.3)" : "rgba(0,0,255,0.3)"}
              stroke={isSelected ? "red" : "blue"}
              onMouseDown={(e) => {
                if (activeTool === "select") {
                  e.stopPropagation(); // prevent canvas deselect
                  setSelectedId(index);
                  setIsDragging(true);

                  const svg = e.target.closest("svg");
                  const rect = svg.getBoundingClientRect();
                  const mouseX = e.clientX - rect.left;
                  const mouseY = e.clientY - rect.top;

                  setOffset({
                    x: mouseX - shape.x,
                    y: mouseY - shape.y,
                  });
                }
              }}
            />

            {/* Annotation Text */}
            {activeTool === "view" && (
              <text
                x={shape.x + 5}
                y={shape.y - 5}
                fontSize="12"
                fill="black"
              >
                {`W: ${Math.abs(shape.width)} H: ${Math.abs(shape.height)}`}
              </text>
            )}
          </g>
        );
      })}

      {/* While drawing */}
      {drawing && (
        <rect
          x={Math.min(drawing.x, drawing.x + drawing.width)}
          y={Math.min(drawing.y, drawing.y + drawing.height)}
          width={Math.abs(drawing.width)}
          height={Math.abs(drawing.height)}
          fill="rgba(0,255,0,0.3)"
          stroke="green"
        />
      )}
    </svg>
  );
};

export default CanvasArea;
