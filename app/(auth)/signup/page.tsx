"use client";

import { signupEvent } from "@/api/service/authActions";
import { RootState } from "@/app/lib/store";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import { ROUTES } from "@/constants/routes";
import { validateSignup } from "@/utils/validate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ZodIssue } from "zod";

const Signup = () => {
  const router = useRouter();
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

  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<any>();

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
    } else {
      assignError([]);
      dispatch(
        signupEvent({ email: formState.email, password: formState.password })
      );
    }
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      router.push(ROUTES.products);
    }
  }, [authState]);

  return (
    <div className="centered-div">
      <form
        onSubmit={onSubmit}
        className="flex flex-col min-w-[20%] max-lg:w-[38%] max-md:w-[80%] gap-3 card mx-auto px-6 pt-5 pb-5"
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
          {authState.loading ? (
            <Spinner />
          ) : (
            <span className="text-white text-center">Submit</span>
          )}
        </Button>

        <h6 className="font-semibold text-center mt-3 text-sm cursor-default">
          Already have an account?{" "}
          <Link
            href={ROUTES.login}
            className=" text-primary mx-2 underline underline-offset-2 cursor-pointer"
          >
            Login
          </Link>
        </h6>
      </form>
    </div>
  );
};

export default Signup;
