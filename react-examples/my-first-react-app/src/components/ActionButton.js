import React from "react";

function ActionButton() {
  function handleClick() {
    alert("Button Clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

export default ActionButton;
