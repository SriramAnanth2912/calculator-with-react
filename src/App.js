import Calculator from "./Calculator.js";
import calculatorIcon from "./assets/Calculator_30001.ico";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = calculatorIcon;
    document.head.appendChild(link);
  }, []);
  return <div className="body">{<Calculator />}</div>;
}

export default App;
