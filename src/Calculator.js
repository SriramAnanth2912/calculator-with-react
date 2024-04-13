import { React, useState, useEffect } from "react";
import History from "./History";
function Calculator() {
  const [prevOperand, setprevOperand] = useState("");
  const [currentOperand, setcurrentOperand] = useState("");
  const [operation, setoperation] = useState("");
  const [prevOperandTextElement, setprevOperandTextElement] = useState("");
  const [currentOperandTextElement, setcurrentOperandTextElement] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  // let countOperations = 0;
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
    if (prevOperand !== "" && operation === "") {
      setprevOperand(prevOperand + number);
      setcurrentOperand("");
    }
  };
  const deleteNumber = () => {
    setcurrentOperand(currentOperand.slice(0, -1));
    if (currentOperand === "" && prevOperand !== "" && operation !== "") {
      setoperation("");
    } else if (currentOperand === "" && operation === "") {
      setprevOperand(prevOperand.slice(0, -1));
    }
  };
  const chooseOperation = (ope) => {
    // need to add negative numbers here
    // countOperations++;
    if (currentOperand === "" && prevOperand === "") return;
    if (prevOperand !== null && operation !== "" && currentOperand !== "") {
      compute();
      setoperation(ope);
      setcurrentOperand("");
    } else if (prevOperand === "" && currentOperand !== "") {
      setoperation(ope);
      setprevOperand(currentOperand);
      setcurrentOperand("");
    } else if (currentOperand === "" && prevOperand !== "" && operation !== "") {
      setoperation(ope);
    } else if (prevOperand !== "" && operation === "") {
      setoperation(ope);
    }
  };

  const compute = () => {
    let computation;
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+": {
        computation = prev + current;
        break;
      }
      case "-": {
        computation = prev - current;
        break;
      }
      case "*": {
        computation = prev * current;
        break;
      }
      case "÷": {
        computation = prev / current;
        break;
      }
      default:
        return;
    }
    setprevOperand(computation.toString());
    setcurrentOperand(computation.toString());
    setHistory([
      ...history,
      {
        num1: prev.toString(),
        num2: current.toString(),
        operator: operation.toString(),
        result: computation.toString(),
      },
    ]);
  };
  const equals = () => {
    compute();
    setoperation("");
    setprevOperand("");
  };

  useEffect(() => {
    setcurrentOperandTextElement(currentOperand);
    if (operation !== "" && prevOperand !== "") {
      setprevOperandTextElement(`${prevOperand} ${operation}`);
    } else if (operation === "" && prevOperand !== "") {
      setprevOperandTextElement(`${prevOperand}`);
    } else {
      setprevOperandTextElement("");
    }
  }, [operation, prevOperand, currentOperand]);
  return (
    <>
      <div className="calculator">
        <div className="result">
          <div className="previous-operand">{prevOperandTextElement}</div>
          <div className="current-operand">{currentOperandTextElement}</div>
        </div>
        <button
          onClick={() => {
            clearNumber();
          }}
          className="span-two"
        >
          AC
        </button>
        <button
          onClick={() => {
            deleteNumber();
          }}
        >
          DEL
        </button>
        <button
          onClick={() => {
            chooseOperation("÷");
          }}
        >
          ÷
        </button>
        <button
          onClick={() => {
            appendNumber("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            appendNumber("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            appendNumber("3");
          }}
        >
          {" "}
          3
        </button>
        <button
          onClick={() => {
            chooseOperation("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            appendNumber("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            appendNumber("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            appendNumber("6");
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            chooseOperation("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            appendNumber("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            appendNumber("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            appendNumber("9");
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            chooseOperation("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            appendNumber(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            appendNumber("0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            equals();
          }}
          className="span-two"
        >
          =
        </button>
      </div>
      <div className="history">
        <button
          onClick={() => {
            setShowHistory(!showHistory);
          }}
        >
          History
        </button>
        <div>{showHistory && <History history={history} />}</div>
      </div>
    </>
  );
}
export default Calculator;
