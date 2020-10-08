import React, { useState } from "react";
import "./App.css";
import { Input, Button } from "antd";
import { Redirect } from "react-router-dom";

function ScreenHome() {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [listErrorsSignin, setListErrorsSignin] = useState([])
  const [listErrorsSignup, setListErrorsSignup] = useState([])
//sign -in
const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

//button Submit signup
  const handleSubmitSignup = async () => {
    const data = await fetch('/sign-up', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`,
    });

    const body = await data.json()
    if(body.result == true) {
      setUserExists(true);
    } else {
      setListErrorsSignup(body.error)
    }

  }

//button submit signin
const handleSubmitSignin =  async () => {
  const data = await fetch('/sign-in', {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
  });
  const body = await data.json()
   if(body.result == true) {
      setUserExists(true);
}else{
  setListErrorsSignin(body.error)
}
}
// success connection
console.log('userExists', userExists);
if (userExists) {
  return <Redirect to='/screensource' />;
}

var tabErrorsSignin = listErrorsSignin.map((error, i) => {
  return (<p>{error}</p>)
})
var tabErrorsSignup = listErrorsSignup.map((error, i) => {
  return (<p>{error}</p>)
})

  return (
    <div className="Login-page">
      {/* SIGN-IN */}

      <div className="Sign">

        <Input  onChange={(e) => setSignInEmail(e.target.value)} className="Login-input" placeholder="email" />

        <Input.Password onChange={(e) => setSignInPassword(e.target.value)}  className="Login-input" placeholder="password" />

        {tabErrorsSignin}

        <Button
          onClick={()=> handleSubmitSignin()}
          style={{ width: "80px" }}
          type="primary"
        >
          Sign-in
        </Button>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
        <Input
          onChange={(e) => setSignUpUsername(e.target.value)}
          className="Login-input"
          placeholder="username"
        />

        <Input
          onChange={(e) => setSignUpEmail(e.target.value)}
          className="Login-input"
          placeholder="email"
        />

        <Input.Password
          onChange={(e) => setSignUpPassword(e.target.value)}
          className="Login-input"
          placeholder="password"
        />
          {tabErrorsSignup}
        <Button
          onClick={()=> handleSubmitSignup()}
          style={{ width: "80px" }}
          type="primary"
        >
          Sign-Up
        </Button>
      </div>
    </div>
  );
}

export default ScreenHome;
