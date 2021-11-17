import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../redux/actionCreators/users";

function Register() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.authData);
  const router = useHistory();

  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email(),
      password: yup.string().min(7),
    })
    .required();

  if (token) {
    router.push("/posts");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerUser(data, router));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="container m-auto">
          <h3 className="text-center text-3xl font-medium mt-4">Register</h3>
          <div className="flex mt-4">
            <div className="md:w-1/2">
              <img src="" alt="" className="w-1/2" />
            </div>
            <div className="grid md:w-1/2 m-auto">
              <div className="mt-2">
                <label htmlFor="firstName" className="text-md">
                  First Name
                </label>
                <input
                  className="block mt-2 p-1 md:w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Enter your First Name here"
                />
                <p>{errors.firstName?.message}</p>
              </div>
              <div className="mt-2">
                <label htmlFor="lastName" className="text-md">
                  Last Name
                </label>
                <input
                  className="block mt-2 p-1 md:w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Enter your Last Name here"
                />
                <p>{errors.lastName?.message}</p>
              </div>
              <div className="mt-2">
                <label htmlFor="emailId" className="text-md">
                  Email-Id
                </label>
                <input
                  className="block mt-2 p-1 md:w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="text"
                  id="emailId"
                  {...register("email")}
                  placeholder="Enter your email here"
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="text-md">
                  Password
                </label>
                <input
                  className="block mt-2 p-1 md:w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="Enter your password here"
                />
                <p>{errors.password?.message}</p>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="text-md font-medium p-1 w-1/4 border-2 border-blue-500 bg-blue-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <h5 className="text-sm font-sm mt-5">
            Have an account already?
            <Link to="/auth/login" className="text-red-500 ml-2">
              Login
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Register;
