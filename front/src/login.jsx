import React, { useState } from "react";
import "./login1.scss";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ uid: "", password: "" });
  const handleUidChange = (event) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      uid: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: event.target.value,
    }));
  };
  const [udata, setData] = useState({ ruid: "", rpassword: "" });
  const [cpass, SetCpass] = useState("");
  const handleUid = (event) => {
    setData((prevCredentials) => ({
      ...prevCredentials,
      ruid: event.target.value,
    }));
  };
  const handlePassSame = (event) => {
    SetCpass(event.target.value);
  };

  const handlePass = () => {
    toast.error("🪲 There is a BUG in backend", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handlePassword = (event) => {
    setData((prevCredentials) => ({
      ...prevCredentials,
      rpassword: event.target.value,
    }));
  };

  const handleLogin = async () => {
    // setCredentials(uid, password);
    console.log(credentials);
    // You can perform login logic here using uid and password
    // console.log("Login clicked with UID:", uid, "and Password:", password);
    try {
      const response = await axios.post(
        "https://authen-server.vercel.app/login",
        credentials
      );
      console.log(response.status);
      if (response.status === 200) {
        toast.success("😍 Login successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
      } else {
        toast.warn("😒 Invalid Credentials", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("🪲 There is a BUG in backend", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
  };
  const handleSignup = async () => {
    // setCredentials(uid, password);
    if (udata.rpassword === cpass) {
      console.log(udata);
      // You can perform login logic here using uid and password
      // console.log("Login clicked with UID:", uid, "and Password:", password);
      try {
        const response = await axios.post(
          "https://authen-server.vercel.app/signup",
          udata
        );
        console.log("Data Added", response.data);
        // You can handle the login success here
        if (response.status === 201) {
          toast.success("User created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
          });
        } else {
          toast.warn("User Already Exists", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
          });
        }
      } catch (error) {
        toast.error("🪲 There is a BUG in backend", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
      }
    } else {
      toast.warn("Password Same ah Illa BRO 😎", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
  };

  return (
    <div>
      <section className="main">
        <div className="form_wrapper">
          <input
            type="radio"
            className="radio"
            name="radio"
            id="login"
            defaultChecked="login"
          />
          <input type="radio" className="radio" name="radio" id="signup" />
          <div className="tile">
            <h3 className="login">Login Form</h3>
            <h3 className="signup">Signup Form</h3>
          </div>
          <label className="tab login_tab" htmlFor="login">
            Login
          </label>
          <label className="tab signup_tab" htmlFor="signup">
            Signup
          </label>
          <span className="shape" />
          <div className="form_wrap">
            <div className="form_fild login_form">
              <div className="input_group">
                <input
                  type="email"
                  className="input"
                  placeholder="Email Address"
                  value={credentials.uid}
                  onChange={handleUidChange}
                />
              </div>
              <div className="input_group">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handlePasswordChange}
                />
              </div>
              <a onClick={handlePass} className="forgot">
                Forgot password?
              </a>
              <input
                type="submit"
                onClick={handleLogin}
                className="btn"
                defaultValue="Login"
              />

              <div className="not_mem">
                <label htmlFor="signup">
                  Not a member? <span> Signup now</span>
                </label>
              </div>
            </div>
            <div className="form_fild signup_form">
              <div className="input_group">
                <input
                  type="email"
                  className="input"
                  placeholder="Email Address"
                  value={udata.ruid}
                  onChange={handleUid}
                />
              </div>
              <div className="input_group">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={udata.rpassword}
                  onChange={handlePassword}
                />
              </div>
              <div className="input_group">
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                  value={cpass}
                  onChange={handlePassSame}
                />
              </div>

              <input
                type="submit"
                onClick={handleSignup}
                className="btn"
                defaultValue="Signup"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
