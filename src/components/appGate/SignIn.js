import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";
import { SiTwitter } from "react-icons/si";
import { Link, useHistory } from "react-router-dom";
/************************************************************ */
function SignIn() {
  const history = useHistory();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [err, setErr] = useState();

  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:8000/api/signin", {
        email,
        password,
      });
      console.log(result);
      console.log(result.data.retrevdUser);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.retrevdUser));
      history.push("/profile");
    } catch (error) {
      setErr(error.response.data.msg);
    }
  };

  return (
    <div className='card'>
      <SiTwitter className='twitter-Icon' />
      <h1>Log in to Twitter</h1>
      <p>{err}</p>
      <Input
        type='email'
        className='input-field'
        required
        placeholder='phone, email or username'
        onChange={(e) => setemail(e.target.value)}
      />
      <Input
        type='password'
        className='input-field'
        required
        placeholder='Password'
        onChange={(e) => setpassword(e.target.value)}
      />
      <Button type='submit' className='signin-btn' onClick={submitHandeler}>
        {" "}
        Sign in
      </Button>
      <Link to='/signup'> Sign up on twitter</Link>
    </div>
  );
}

export default SignIn;
