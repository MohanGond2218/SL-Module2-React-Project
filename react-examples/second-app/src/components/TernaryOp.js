import React from "react";

function TernaryOp(props) {
  return (
    <div>
      <h2> {props.isLoggedIn ? "Welcome " + props.name : "Please Sign Up"}</h2>
    </div>
  );
}
export default TernaryOp;
