"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { validateSignup } from "@/utils/validate";
import React, { useState } from "react";
import { ZodIssue } from "zod";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const assignError = (issues: ZodIssue[]) => {
    const err = {
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
    issues.forEach((issue) => {
      switch (issue.path[0]) {
        case "email":
          err.emailError = issue.message;
          break;
        case "password":
          err.passwordError = issue.message;
          break;
        case "confirmPassword":
          err.confirmPasswordError = issue.message;
          break;
      }
    });
    setErrors(err);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const validated = validateSignup.safeParse({
      email: formState.email,
      password: formState.password,
      confirmPassword: formState.confirmPassword,
    });

    if (!validated.success) {
      assignError(validated.error.issues);
    }
  };

  return (
    <div className="flex justify-center flex-col m-auto h-screen">
      <form
        onSubmit={onSubmit}
        className="flex flex-col min-w-[20%] max-lg:w-[38%] max-md:w-[80%] gap-3 card mx-auto p-6"
      >
        <h1 className="font-bold text-2xl">Signup</h1>
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
          errorText={errors.passwordError}
          errorTextVisible={
            errors.passwordError != undefined &&
            errors.passwordError.trim() != ""
          }
          inputClassName={`h-10`}
          containerClassName={"px-0"}
        />

        <Input
          value={formState.confirmPassword}
          setValue={(value: any) =>
            setFormState({
              ...formState,
              confirmPassword: value,
            })
          }
          label={"Enter Confirm Password"}
          type={"password"}
          errorText={errors.confirmPasswordError}
          errorTextVisible={
            errors.confirmPasswordError != undefined &&
            errors.confirmPasswordError.trim() != ""
          }
          inputClassName={`h-10`}
          containerClassName={"px-0"}
        />

        <Button type={"submit"}>
          <span className="text-white text-center">Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default Signup;
