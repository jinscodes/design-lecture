import React from "react";

export default function Senario({ senarioInfo }) {
  return (
    <>
      <div>{senarioInfo[0]}</div>
      <div>{senarioInfo[1]}</div>
      <div>{senarioInfo[2]}</div>
      <div>{senarioInfo[3]}</div>
    </>
  );
}
