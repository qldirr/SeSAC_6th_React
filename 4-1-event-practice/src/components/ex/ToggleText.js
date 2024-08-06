import React, { useState } from "react";

export default function ToggleText() {
  const [btnText, setBtnText] = useState("사라져라");
  const [text, setText] = useState("안녕하세요");

  const hiddenText = () => {
    if (btnText === "사라져라") {
      setBtnText("보여라");
      setText("");
    } else {
      setBtnText("사라져라");
      setText("안녕하세요");
    }
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={hiddenText}>{btnText}</button>
    </div>
  );
}
