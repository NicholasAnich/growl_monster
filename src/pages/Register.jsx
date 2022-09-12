import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Monster Chat</span>
        <span className="title">Register</span>
        <input type="text" placeholder="display name"/>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password"/>
        <input type="file"/>
      </div>
    </div>
  );
};

export default Register;
