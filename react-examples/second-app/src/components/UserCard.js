import React from "react";

function UserCard(props) {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {props.user.name}</p>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

export default UserCard;
