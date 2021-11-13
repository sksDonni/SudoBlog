import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actionCreators/users";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const router = useHistory();
  const token = useSelector((state) => state.users.authData);

  const schema = yup
    .object({
      email: yup.string().email(),
      password: yup.string(),
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

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data, router));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container md:w-1/2 md:m-auto">
          <h3 className="text-center text-3xl font-medium mt-4">Login</h3>
          <div className="grid md:flex mt-4 p-3">
            <div className="w-1/2">
              <img src="" alt="" className="w-1/2" />
            </div>
            <div className="grid w-1/2 m-auto">
              <div className="mt-2">
                <label htmlFor="email" className="text-md">
                  Email-Id
                </label>
                <input
                  className="block mt-2 p-1 md:w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email here"
                />
                <p className="text-xl text-red-400 text-md">
                  {errors.email?.message}
                </p>
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
                <p className="text-xl text-red-400 text-md">
                  {errors.password?.message}
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="text-md font-medium p-1 w-2/4 border-2 border-blue-500 bg-blue-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <h5 className="text-sm font-sm mt-5 text-center">
            Don't have an account already?
            <Link to="/auth/register" className="text-red-500 ml-2">
              Register here!!
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Login;
