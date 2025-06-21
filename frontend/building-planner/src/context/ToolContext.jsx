import { createContext, useContext, useState } from "react";

const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [activeTool, setActiveTool] = useState("draw"); // 'draw', 'select', 'view'

  return (
    <ToolContext.Provider value={{ activeTool, setActiveTool }}>
      {children}
    </ToolContext.Provider>
  );
};

export const useTool = () => useContext(ToolContext);
