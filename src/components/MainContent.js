import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../components/MainContent.css";

function MainContent() {
  const { theme } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("black");

  const toggleColors = () => {
    setTextColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  };

  return (
    <div className={`content ${theme}-theme`} onClick={toggleColors}>
      <h1>ALL LIVES MATTER!!!</h1>
    </div>
  );
}

export default MainContent;
