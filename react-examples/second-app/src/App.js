import React, { useState } from "react";
import "./App.css";
import User from "./components/User";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import TernaryOp from "./components/TernaryOp";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("Mohan");
  const user = {
    name: "Moshsk",
    email: "Msshd@gmail.com",
  };
  return (
    <div className="App">
      {/* <User name="Mohan" email="msg@gmail.com" />
      <User name="Mohan2" email="msg2@gmail.com" />
      <UserCard user={user} /> 
       <Button
        label="Click Me"
        onClick={() => {
          alert("Button Clicked");
        }}
      />
      
      <Greeting name="Mohanhhh" />
      <Greeting />
      <Profile name={233} age={33} />
      <Profile name="Peter" age={33} />
      <TernaryOp isLoggedIn={true} name="John" />
      <TernaryOp isLoggedIn={false} />\
       <Form />
       */}
      <input
        type="text"
        placeholder="Enter New Name"
        className="form-control mt-5"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Greeting name={name} />
    </div>
  );
}

export default App;
