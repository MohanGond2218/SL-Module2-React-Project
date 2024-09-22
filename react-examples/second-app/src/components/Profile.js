import React from "react";
import propTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.age}</h2>
    </div>
  );
}

Profile.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
};

export default Profile;
