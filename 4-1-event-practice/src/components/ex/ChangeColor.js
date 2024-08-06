import React, { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState({ color: "black" });
  const [text, setText] = useState("검정색 글씨");

  const redText = () => {
    setColor({ color: "red" });
    setText("빨간색 글씨");
  };

  const blueText = () => {
    setColor({ color: "blue" });
    setText("파란색 글씨");
  };

  return (
    <div>
      <div style={color}>
        <h1>{text}</h1>
      </div>
      <button onClick={redText}>red</button>
      <button onClick={blueText}>blue</button>
    </div>
  );
}

export default ChangeColor;
