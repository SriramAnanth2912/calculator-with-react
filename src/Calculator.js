import React from "react";
import { useState, useEffect } from "react";

function Calculator() {
  const [prevOperand, setprevOperand] = useState("");
  const [currentOperand, setcurrentOperand] = useState("");
  const [operation, setoperation] = useState("");
  const [prevOperandTextElement, setprevOperandTextElement] = useState("");
  const [currentOperandTextElement, setcurrentOperandTextElement] = useState("");

  const clearNumber = () => {
    setcurrentOperand("");
    setoperation("");
    setprevOperand("");
  };

  const appendNumber = (number) => {
    if (number === "." && currentOperand.includes(".")) {
      return;
    }
    setcurrentOperand(currentOperand + number);
  };
  const deleteNumber = () => {
    setcurrentOperand(currentOperand.slice(0, -1));
  };
  const chooseOperation = (ope) => {
    if (currentOperand === "") return;
    if (prevOperand !== "") {
      compute();
    }
    if (operation != null) {
      compute();
    }
    setprevOperand(currentOperand);
    setoperation(ope);
    setcurrentOperand("");
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(prevOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    setcurrentOperand(computation.toString());
    setoperation("");
    setprevOperand("");
  };

  useEffect(() => {
    setcurrentOperandTextElement(currentOperand);
    if (operation !== "") {
      setprevOperandTextElement(`${prevOperand} ${operation}`);
    } else {
      setprevOperandTextElement("");
    }
  }, [prevOperand, operation, currentOperand]);

  return (
    <div className="calculator">
      <div className="result">
        <div data-previous-operand class="previous-operand">
          {prevOperandTextElement}
        </div>
        <div data-current-operand class="current-operand">
          {currentOperandTextElement}
        </div>
      </div>
      <button
        data-all-clear
        onClick={() => {
          clearNumber();
        }}
        className="span-two"
      >
        AC
      </button>
      <button
        data-delete
        onClick={() => {
          deleteNumber();
        }}
      >
        DEL
      </button>
      <button
        data-operation
        onClick={() => {
          chooseOperation("÷");
        }}
      >
        ÷
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("1");
        }}
      >
        1
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("2");
        }}
      >
        2
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("3");
        }}
      >
        {" "}
        3
      </button>
      <button
        data-operation
        onClick={() => {
          chooseOperation("*");
        }}
      >
        *
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("4");
        }}
      >
        4
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("5");
        }}
      >
        5
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("6");
        }}
      >
        6
      </button>
      <button
        data-operation
        onClick={() => {
          chooseOperation("+");
        }}
      >
        +
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("7");
        }}
      >
        7
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("8");
        }}
      >
        8
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("9");
        }}
      >
        9
      </button>
      <button
        data-operation
        onClick={() => {
          chooseOperation("-");
        }}
      >
        -
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber(".");
        }}
      >
        .
      </button>
      <button
        data-number
        onClick={() => {
          appendNumber("0");
        }}
      >
        0
      </button>
      <button
        data-equals
        onClick={() => {
          compute();
        }}
        className="span-two"
      >
        =
      </button>
    </div>
  );
}
export default Calculator;
