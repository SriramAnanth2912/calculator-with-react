import React from "react";
import { useState, useEffect } from "react";

function Working() {
  const [prevOperand, setprevOperand] = useState("");
  const [currentOperand, setcurrentOperand] = useState("");
  const numberButtons = document.querySelectorAll(["data-number"]);
  const operationButtons = document.querySelectorAll(["data-operation"]);
  const deleteButton = document.querySelectorAll(["data-delete"]);
  const clearButton = document.querySelectorAll(["data-all-clear"]);
  const equalsButton = document.querySelectorAll(["data-equals"]);
  const previousOperandTextElement = document.querySelector(["data-previous-operand"]);
  const currentOperandTextElement = document.querySelector(["data-current-operand"]);

  numberButtons.forEach((button) => {
    button.addEventListener("click", (button, currentOperand) => {
      setcurrentOperand(currentOperand + button.innerText);
    });
  });
}
