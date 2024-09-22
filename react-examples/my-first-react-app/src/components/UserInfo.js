import React, { useState } from "react";

function UserInfo() {
  const [user, setUser] = useState({ name: "", email: "" });

  function handleChange(e) {
    console.log("event target", e.target);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`A Name : ${user.name} and Email: ${user.email} was submitted`);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInfo;
