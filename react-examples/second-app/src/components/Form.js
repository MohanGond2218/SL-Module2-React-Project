import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    const validationErrors = {};
    e.preventDefault();
    if (!name) {
      validationErrors.name = "Name can not be empty";
    }
    if (!email) {
      validationErrors.email = "Email can not be empty";
    }
    if (!password) {
      validationErrors.password = "Password can not be empty";
    }
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert(
        `Form submitted ! \n Name: ${name}\n Email: ${email}\n Password: ${password}`
      );
    }
  };

  return (
    <div className="container">
      <h1>Welcome to form validations!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            id="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <input
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <input
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <input type="submit" className="btn btn-primary" value="Submit"></input>
      </form>
    </div>
  );
}

export default Form;
