import React from "react";

function History({ history }) {
  let date = new Date();
  let dateTime = `${date.getHours()}:${date.getMinutes()}`;
  let fullDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return (
    <div className="history-text">
      <h2>{fullDate}</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((calculation, index) =>
            history[index].result !== " " || undefined ? (
              <li key={index}>
                <span className="time">Time:: {dateTime}</span>
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
