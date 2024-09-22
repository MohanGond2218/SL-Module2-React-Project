import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <p>{isToggled ? "ON" : "OFF"}</p>
      <button
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Toggle;
