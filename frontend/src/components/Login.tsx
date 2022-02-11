/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UseIcon } from "../services/useIcon";
import bigLogo from "../assets/icons/bigLogo.svg";
import userIcon from "../assets/icons/userIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";
import visibleIcon from "../assets/icons/visibleIcon.svg";
import { SubmitButton } from "../assets/styledComponents/Buttons";
import {
  BackDiv,
  CenterDiv,
  LogoDiv,
} from "../assets/styledComponents/publicBack";
import {
  Form,
  Input,
  InputIcon,
  InputContainer,
  FieldError,
} from "../assets/styledComponents/Form";

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
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = () => {
    setSuccess("trying");
    const usernameValue = getValues("username");
    const emailValue = getValues("email");
    const passwordValue = getValues("password");
  };

  return (
    <BackDiv>
      <CenterDiv>
        <LogoDiv>
          <UseIcon icon={bigLogo} name="memory booster logo" />
        </LogoDiv>

        <Form onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            <InputIcon>
              <UseIcon icon={userIcon} name="user icon" />
            </InputIcon>
            <Input
              id="username"
              placeholder="Username"
              {...register("username", { required: true, minLength: 3 })}
            />
          </InputContainer>

          {errors.username && errors.username.type === "required" && (
            <FieldError>Username is required.</FieldError>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <FieldError>The username must be at least 3 characters.</FieldError>
          )}
          <InputContainer>
            <InputIcon>
              <UseIcon icon={passwordIcon} name="password icon" />
            </InputIcon>
            <Input
              id="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            <InputIcon>
              <UseIcon icon={visibleIcon} name="unhide password" />
            </InputIcon>
          </InputContainer>

          {errors.password && errors.password.type === "required" && (
            <FieldError>Password is required.</FieldError>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <FieldError>The password must be at least 8 characters.</FieldError>
          )}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </CenterDiv>
    </BackDiv>
  );
};

export default Login;
