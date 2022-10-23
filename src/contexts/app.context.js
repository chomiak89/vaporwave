import { useState, createContext, useRef } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [currentDemo, setCurrentDemo] = useState("");
  //   GRID COMPONENT
  const [gridWidth, setGridWidth] = useState(50);
  const [gridHeight, setGridHeight] = useState(50);

  //  SET UP REF TO GRID WIDTH AND HEIGHT FOR RESIZE EVENT LISTENER
  //  USED IN SETTINGSDROPDOWN AND GRID
  //  SET UP FUNCTIONS TO UPDATE THE REF AND THE WIDTH / HEIGHT STATE
  const gridWidthRef = useRef(gridWidth);
  const setGridWidthRef = (data) => {
    gridWidthRef.current = data;
    setGridWidth(data);
  };
  const gridHeightRef = useRef(gridHeight);
  const setGridHeightRef = (data) => {
    gridHeightRef.current = data;
    setGridHeight(data);
  };

  return (
    <AppContext.Provider
      value={{
        currentDemo,
        setCurrentDemo,
        gridWidth,
        setGridWidth,
        gridHeight,
        setGridHeight,
        gridWidthRef,
        setGridWidthRef,
        gridHeightRef,
        setGridHeightRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
