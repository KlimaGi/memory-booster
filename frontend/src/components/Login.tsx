import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type LoginData = {
  username: string;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>({ mode: "onBlur" });

  const [success, setSuccess] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = () => {
    setSuccess("trying");
    const usernameValue = getValues("username");
    const emailValue = getValues("email");
    const passwordValue = getValues("password");
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          id="username"
          placeholder="Username"
          {...register("username", { required: true, minLength: 3 })}
        />
        {errors.username && errors.username.type === "required" && (
          <p>Username is required.</p>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <p>The username must be at least 3 characters.</p>
        )}

        <input
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Email is required.</p>
        )}
        <input
          id="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Password is required.</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>The password must be at least 8 characters.</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
