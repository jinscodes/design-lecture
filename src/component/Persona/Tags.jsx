import React from "react";

export default function Tags({ personality }) {
  return (
    <>
      {personality &&
        personality.map((m) => (
          <div key={m} className="tag">
            {m}
          </div>
        ))}
    </>
  );
}
