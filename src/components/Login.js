import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  username: "",
  password: ""
}

const Login = () => {
  const [form, setForm] = useState(initialFormValues);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory();

  const error = "";
  //replace with error state

  const handleChange = (evt) => {
    const { name, value } = evt.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newUser = {
      username: form.username,
      password: form.password
    }

    axios
      .post("http://localhost:5000/api/login", newUser)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        history.push("/bubbles")
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">

        <form onSubmit={handleSubmit} className="my-login">

          <label><strong>Username</strong></label>
          <input onChange={handleChange} id="username" name="username" type="text" value={form.username}/>

          <label><strong>Password</strong></label>
          <input onChange={handleChange} id="password" name="password" type="password" value={form.password}/>

          <button id="submit">Login</button>

        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. ✅
//2. Add whatever state necessary for form functioning.✅
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid. 🔳
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route. ✅
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password" ✅
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit" ✅
//8. MAKE SURE YOUR ERROR p tag contains the id="error" ✅