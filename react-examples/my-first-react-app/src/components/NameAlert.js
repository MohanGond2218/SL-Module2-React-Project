import React, { useState } from "react";

function NameAlert() {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={() => {
        alert(`Alert! A name was submitted: ${name}`);
      }}
    >
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameAlert;
