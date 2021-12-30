import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/welcome";
  const { register, handleSubmit, reset } = useForm();

  // react hook form
  const onSubmit = (data) => {
    axios
      .post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin", data)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(redirect_uri);
          reset();
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "400",
            text: "Email/password is missing!",
          });
        } else if (err.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "401",
            text: "Email/password is incorrect!",
          });
        }
      });
  };
  return (
    <>
      {/* circle */}
      <div className="circle"></div>
      <div className="circle circle2"></div>

      {/* form container */}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>

          <br />
          <input {...register("email")} placeholder="Email" />
          <br />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <br />

          <br />
          <input type="submit" value="Login" />
          <p>
            New user? please <Link to="/registration">register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
