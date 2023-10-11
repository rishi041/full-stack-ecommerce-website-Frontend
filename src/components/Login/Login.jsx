import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link, Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "data");
  };

  return (
    <div title="Login">
      <div className="flex items-center justify-center m-auto mt-20">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-4xl my-4">Continue Shopping</h1>
          <div className="">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Email</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="email"
              name="email"
              {...register("email", {
                required: true,
                // eslint-disable-next-line no-useless-escape
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              placeholder="Enter a valid email"
            />
          </div>
          {errors?.email && errors?.email.type === "required" && (
            <div className="mt-1 italic">Email required</div>
          )}
          {errors?.email && errors?.email.type === "pattern" && (
            <div className="mt-1 italic">Invalid email</div>
          )}
          <div className="mt-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Password</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
          </div>
          {errors?.password && (
            <div className="mt-1 italic">
              {errors?.password?.type === "required" && "Password required"}
            </div>
          )}

          <button type="submit">Login</button>

          <p className="text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
