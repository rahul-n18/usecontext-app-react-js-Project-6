import React, { createContext, useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../components/Toolbar.css";

function Toolbar() {
  const { setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      //Toggle Theme
      const newTheme = prevTheme === "light" ? "dark" : "light";

      //Toggle Text
      const newTextColor = newTheme === "light" ? "black" : "white";

      //update the mainContent
      document.documentElement.style.setProperty("--text-color", newTextColor);

      return newTheme;
    });
  };

  return (
    <div className="toolbar">
      <button onClick={toggleTheme}>Click Me!!!</button>
    </div>
  );
}

export default Toolbar;
