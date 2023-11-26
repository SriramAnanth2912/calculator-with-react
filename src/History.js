import React from "react";

function History({ history }) {
  let date = new Date();
  let dateTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <>
      <h2>Calculator history</h2>
      <ul>
        {history.map((calculation, index) => (
          <li key={index}>
            Time:{dateTime}
            <br></br>
            {calculation}
          </li>
        ))}
      </ul>
    </>
  );
}
export default History;
