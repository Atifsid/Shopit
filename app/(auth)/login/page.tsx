"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { validateLogin } from "@/utils/validate";
import React, { useState } from "react";
import { ZodIssue } from "zod";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

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
    }
  };

  return (
    <div className="flex justify-center flex-col m-auto h-screen">
      <div className="flex flex-col min-w-[20%] max-lg:w-[38%] max-md:w-[80%] gap-3 card mx-auto p-6">
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
          <span className="text-white text-center">Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
