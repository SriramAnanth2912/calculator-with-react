import React from "react";

function History({ history }) {
  let date = new Date();
  let dateTime = `${date.getHours()}:${date.getMinutes()}`;
  let fullDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return (
    <>
      <h2>{fullDate}</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((calculation, index) =>
            history[index].num1 !== "" ? (
              <li key={index}>
                <span className="time">Time:: {dateTime}</span>
                <br></br>
                {calculation.num1} {calculation.operator} {calculation.num2}
                {calculation.result.toString().length > 6
                  ? " = " + calculation.result.toString()
                  : " = " + calculation.result.toString().slice(0, 6)}
              </li>
            ) : null
          )}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
export default History;
