import React from "react";

function History({ history }) {
  let date = new Date();
  let dateTime = `${
    date.getHours() > 12
      ? String(date.getHours() - 12).padStart(2, "0")
      : String(date.getHours()).padStart(2, "0")
  }:${String(date.getMinutes()).padStart(2, "0")} ${date.getHours() > 12 ? "pm" : "am"}`;

  let fullDate = `${date.toLocaleString("default", {
    month: "long",
  })} ${String(date.getDate()).padStart(2, "0")},${date.getFullYear()}`;
  return (
    <div className="history-text">
      <h2>{fullDate}</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((calculation, index) =>
            history[index].result !== " " || undefined ? (
              <li key={index}>
                <span className="time">@ {dateTime}</span>
                <br></br>
                {calculation.num1} {calculation.operator} {calculation.num2}
                {calculation.result !== undefined ? " = " + calculation.result : " "}
              </li>
            ) : (
              " "
            )
          )}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
export default History;
