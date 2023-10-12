import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getUsers, addNewUserToDB } from "../../services/userService";
import { Link, Navigate, useLocation } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    let payload = {
      username: data.username,
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    console.log(payload, "data");

    await addNewUserToDB(payload).then((response1) => {
      console.log(response1);
    });
  };

  useEffect(() => {
    async function data() {
      await getUsers().then((res) => {
        if (res?.data?.length > 0) {
          console.log(res.data, "getUsers");
        }
      });
    }

    data();
  }, []);

  return (
    <div title="Create account">
      <div className="flex items-center justify-center mx-auto mt-20 ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2 mx-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-4xl">Create Account</h1>
          <div className="mt-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Username</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="text"
              name="username"
              {...register("username", {
                minLength: {
                  value: 4,
                  message: "Username must be greater than 3 characters",
                },
                required: "Username is required",
              })}
            />
          </div>
          {errors?.username && (
            <div className="pt-2">{errors.username.message}</div>
          )}
          <div className="mt-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Fullname</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="text"
              name="fullname"
              {...register("fullname", {
                required: "Fullname cannot be empty",
                minLength: {
                  value: 6,
                  message: "Fullname must be greater than 5 characters",
                },
              })}
            />
          </div>
          {errors.name && <div className="pt-2">{errors.name.message}</div>}
          <div className="mt-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Email</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="email"
              name="email"
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Email not valid",
                },
              })}
            />
          </div>
          {errors.email && <div className="pt-2">{errors.email.message}</div>}
          <div className="mt-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Password</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              name="password"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Password must be greater than 5 characters",
                },
              })}
            />
          </div>
          {errors.password && (
            <div className="pt-2">{errors.password.message}</div>
          )}
          <div className="mt-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              <span>Confirm Password</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              name="password2"
              {...register("password2", {
                validate: (value) =>
                  value === password.current || "Passwords do not match",
              })}
            />
            {errors.password2 && (
              <div className="pt-2">{errors.password2.message}</div>
            )}
          </div>
          <button type="submit" className="mt-4">
            Create Account
          </button>

          <p className="text-sm mt-4">
            Have an account?{" "}
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
