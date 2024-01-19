import React, { createContext, useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import MainContent from "./components/MainContent";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default App;
