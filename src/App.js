import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // ✅ FIX: use functional update
  const addValue = (val) => {
    setInput((prev) => prev + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>

      <input type="text" value={input} readOnly className="display" />

      <div className="buttons">
        {/* Scientific */}
        <button onClick={() => addValue("sin(")}>sin</button>
        <button onClick={() => addValue("cos(")}>cos</button>

        <button onClick={clearInput}>C</button>
        <button onClick={deleteLast}>⌫</button>
        <button onClick={() => addValue("tan(")}>tan</button>
        <button onClick={() => addValue("log10(")}>log</button>

        <button onClick={() => addValue("log(")}>ln</button>
        <button onClick={() => addValue("sqrt(")}>√</button>
        <button onClick={() => addValue("^")}>xʸ</button>
        <button onClick={() => addValue("pi")}>π</button>

        {/* Controls */}
      
        <button onClick={() => addValue("/")}>÷</button>
        <button onClick={() => addValue("*")}>×</button>

        {/* Numbers */}
        <button onClick={() => addValue("7")}>7</button>
        <button onClick={() => addValue("8")}>8</button>
        <button onClick={() => addValue("9")}>9</button>
        <button onClick={() => addValue("-")}>−</button>

        <button onClick={() => addValue("4")}>4</button>
        <button onClick={() => addValue("5")}>5</button>
        <button onClick={() => addValue("6")}>6</button>
        <button onClick={() => addValue("+")}>+</button>

        <button onClick={() => addValue("1")}>1</button>
        <button onClick={() => addValue("2")}>2</button>
        <button onClick={() => addValue("3")}>3</button>

        <button onClick={() => addValue("0")}>0</button>
        <button onClick={() => addValue(".")}>.</button>
        <button onClick={() => addValue("(")}>(</button>
        <button onClick={() => addValue(")")}>)</button>

        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;