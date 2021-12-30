import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../Home/Home.css";

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister", data)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Registration Is Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "400",
            text: "Some of the fields are missing or incorrect!",
          });
        } else if (err.response.status === 402) {
          Swal.fire({
            icon: "error",
            title: "400",
            text: "User Already Exists with the given email id!",
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
          <h2>Registration</h2>
          <input {...register("name")} placeholder="Name" />
          <br />
          <input {...register("email")} placeholder="Email" />
          <br />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <br />
          <input {...register("mobile")} placeholder="Mobile" />
          <br />
          <input type="submit" value="Registration" />
          <p>
            Already have an account? please <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Registration;
