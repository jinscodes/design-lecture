import React from "react";

export default function Goals({ goalsInfo }) {
  let keyValue = 0;
  return (
    <ul className="goal-ul">
      <h2>목표</h2>
      {goalsInfo.map((g) => (
        <li key={keyValue++}>{g}</li>
      ))}
    </ul>
  );
}
