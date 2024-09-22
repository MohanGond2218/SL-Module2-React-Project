import React, { useState } from "react";

export default function Greeting(props) {
  return (
    <div>
      {/* <h4>Default Props</h4> */}
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

Greeting.defaultProps = {
  name: "Guest",
};
