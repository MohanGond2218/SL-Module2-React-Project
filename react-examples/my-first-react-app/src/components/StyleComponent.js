import React from "react";

const divStyle = {
  backgrouundColor: "red",
  color: "blue",
  padding: "10px",
};

function StyleComponent() {
  return (
    <div style={divStyle}>
      <p>This is style component</p>
    </div>
  );
}

export default StyleComponent;
