import React, { useState } from "react";

import Button from "../Button/Button.jsx";

import { setToken } from "../../utils/tokens";
import("./Login.scss");

export default function Login(props) {
  const [ email, updateEmail ] = useState("");
  const [ password, updatePassword ] = useState("");

  async function handleSubmit() {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const { data } = await response.json();
      const [ tokenData ] = data;
      const { token } = tokenData;
      setToken(token);
      this.props.fetchUser();
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div className="loginContainer">
      <div className="border">
        <h1>Sign in</h1>
        <label className="formLabel" htmlFor="email">Email:</label>
        <input className="formInput" type="email" id="email" required value={email} onChange={(e) => { updateEmail(e.target.value); }}/>
        <label className="formLabel" htmlFor="password">Password:</label>
        <input className="formInput" type="password" id="password" required value={password} onChange={(e) => { updatePassword(e.target.value);}} />
        <Button 
          text="submit" 
          onClick={() => {
            handleSubmit();
            props.history.push("/");
          }}
        />
      </div>
        
    </div>
    
  )
};