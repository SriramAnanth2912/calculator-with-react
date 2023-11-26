import React from "react";

function History({ history }) {
  let date = new Date();
  let dateTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  let dateDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return (
    <>
      <h2>{dateDate}</h2>
      <ul>
        {history.map((calculation, index) => (
          <li key={index}>
            <span className="time">Time:{dateTime}</span>
            <br></br>
            {calculation}
          </li>
        ))}
      </ul>
    </>
  );
}
export default History;
