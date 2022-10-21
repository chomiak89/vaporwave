import { useState, createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [currentDemo, setCurrentDemo] = useState("");
  //   GRID COMPONENT
  const [gridWidth, setGridWidth] = useState(50);
  const [gridHeight, setGridHeight] = useState(50);
  return (
    <AppContext.Provider
      value={{
        currentDemo,
        setCurrentDemo,
        gridWidth,
        setGridWidth,
        gridHeight,
        setGridHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
