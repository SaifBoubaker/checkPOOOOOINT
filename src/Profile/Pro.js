import React from "react";
import PropTypes from "prop-types";

function Pro({ fullname, bio, profession, fun }) {
  return (
    <div>
      <p>My name is: {fullname} </p>
      <p>Bio:{bio} </p>
      <p>Profession:{profession} </p>
      <button onClick={fun}>ALERT</button>
      <br />
      <input></input>
    </div>
  );
}

export default Pro;

Pro.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  fun: PropTypes.func,
};

Pro.defaultProps = {
  fullname: "Unknown",
  profession: "Student",
};
