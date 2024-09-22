import React from "react";

function User(Props) {
  return (
    <div>
      <h3>
        My name is {Props.name} and Email is {Props.email}
      </h3>
    </div>
  );
}

export default User;
