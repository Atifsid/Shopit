"use client";

import { RootState } from "@/app/lib/store";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import { validateLogin } from "@/utils/validate";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ZodIssue } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { loginEvent } from "@/api/service/authActions";
import { getToken, isTokenValid } from "@/utils/functions";

const Login = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<any>();

  const assignError = (issues: ZodIssue[]) => {
    const err = {
      emailError: "",
      passwordError: "",
    };
    issues.forEach((issue) => {
      switch (issue.path[0]) {
        case "email":
          err.emailError = issue.message;
          break;
        case "password":
          err.passwordError = issue.message;
          break;
      }
    });
    setErrors(err);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const validated = validateLogin.safeParse({
      email: formState.email,
      password: formState.password,
    });

    if (!validated.success) {
      assignError(validated.error.issues);
    } else {
      assignError([]);
      dispatch(
        loginEvent({ email: formState.email, password: formState.password })
      );
    }
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      router.push(ROUTES.products);
    }
  }, [authState.isLoggedIn]);

  return (
    <div className="centered-div">
      <div className="flex flex-col min-w-[20%] max-lg:w-[38%] max-md:w-[80%] gap-5 card mx-auto px-6 pb-4 pt-5">
        <h1 className="font-bold text-2xl">Login</h1>
        <Input
          value={formState.email}
          setValue={(value: any) =>
            setFormState({
              ...formState,
              email: value,
            })
          }
          label={"Enter Email"}
          type={"text"}
          errorText={errors.emailError}
          errorTextVisible={
            errors.emailError != undefined && errors.emailError.trim() != ""
          }
          inputClassName={`h-10`}
          containerClassName={"px-0"}
        />

        <Input
          value={formState.password}
          setValue={(value: any) =>
            setFormState({
              ...formState,
              password: value,
            })
          }
          label={"Enter Password"}
          type={"password"}
          inputClassName={`h-10`}
          containerClassName={"px-0"}
          errorText={errors.passwordError}
          errorTextVisible={
            errors.passwordError != undefined &&
            errors.passwordError.trim() != ""
          }
        />

        <Button click={onSubmit} type={"submit"}>
          {authState.loading ? (
            <Spinner />
          ) : (
            <span className="text-white text-center">Submit</span>
          )}
        </Button>

        <h6 className="font-semibold text-center text-sm cursor-default">
          New user?{" "}
          <Link
            href={ROUTES.signup}
            className="text-primary mx-2 underline underline-offset-2 cursor-pointer"
          >
            Signup
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
