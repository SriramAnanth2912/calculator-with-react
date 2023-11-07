import React from "react";
import { Working } from "./Working.js";
import { useState, useEffect } from "react";

function Calculator() {
  const [prevOperand, setprevOperand] = useState("");
  const [currentOperand, setcurrentOperand] = useState("");
  const [prevOperandTextElement, setprevOperandTextElement] = useState("");
  const numberButtons = document.querySelectorAll(["data-number"]);
  const operationButtons = document.querySelectorAll(["data-operation"]);
  const deleteButton = document.querySelectorAll(["data-delete"]);
  const clearButton = document.querySelectorAll(["data-all-clear"]);
  const equalsButton = document.querySelectorAll(["data-equals"]);
  const previousOperandTextElement = document.querySelector(["data-previous-operand"]);
  const currentOperandTextElement = document.querySelector(["data-current-operand"]);
  const appendNumber = () => {};
  const deleteNumber = () => {};
  const chooseOperation = () => {};
  const clearNumber = () => {};
  const compute = () => {};
  const updateDisplay = () => {};
  return (
    <div className="calculator">
      <div className="result">
        <div data-previous-operand class="previous-operand"></div>
        <div data-current-operand class="current-operand"></div>
      </div>
      <button data-all-clear onClick={clearNumber} className="span-two">
        AC
      </button>
      <button data-delete onClick={deleteNumber}>
        DEL
      </button>
      <button data-operation onClick={chooseOperation}>
        ÷
      </button>
      <button data-number onClick={appendNumber}>
        1
      </button>
      <button data-number onClick={appendNumber}>
        2
      </button>
      <button data-number onClick={appendNumber}>
        {" "}
        3
      </button>
      <button data-operation onClick={chooseOperation}>
        *
      </button>
      <button data-number onClick={appendNumber}>
        4
      </button>
      <button data-number onClick={appendNumber}>
        5
      </button>
      <button data-number onClick={appendNumber}>
        6
      </button>
      <button data-operation onClick={chooseOperation}>
        +
      </button>
      <button data-number onClick={appendNumber}>
        7
      </button>
      <button data-number onClick={appendNumber}>
        8
      </button>
      <button data-number onClick={appendNumber}>
        9
      </button>
      <button data-operation onClick={chooseOperation}>
        -
      </button>
      <button data-number onClick={appendNumber}>
        .
      </button>
      <button data-number onClick={appendNumber}>
        0
      </button>
      <button data-equals onClick={compute} className="span-two">
        =
      </button>
    </div>
  );
}
export default Calculator;
