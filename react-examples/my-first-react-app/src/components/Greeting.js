import React from "react";

function Greeting() {
  const name = "Mohan";
  const isLoggedIn = true;
  return (
    <div>
      <p>name: {name}</p>
      <button>{isLoggedIn ? "LoggedIn" : "LoggedOut"}</button>
    </div>
  );
}

export default Greeting;
