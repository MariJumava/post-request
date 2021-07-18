import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const userPhone = (event) => {
    setPhone(event.target.value);
  };

  const userPassword = (event) => {
    setPassword(event.target.value);
  };

  const signIn = () => {
    axios
      .post("http://localhost:3001/auth/sign-in", {
        phone: phone,
        password: password,
      })
      .then((response) => {
        setText(response.data.email);
      });
  };
  return (
    <form>
      <input
        type="phone"
        name="phone"
        placeholder="Enter your phone"
        required
        onChange={userPhone}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter password"
        onChange={userPassword}
      />
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
      <p>{text}</p>
    </form>
  );
};

export default SignIn;
