"use client";
import { useRouter } from "next/navigation";
import { loadUser } from "./lib/features/auth/authSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Loader } from "@/components/Loader";
import { ROUTES } from "@/constants/routes";
import { isTokenValid } from "@/utils/functions";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    dispatch(loadUser(token));
    if (isTokenValid(token)) {
      router.push(ROUTES.products);
    } else {
      router.push(ROUTES.login);
    }
  }, [router]);

  return <Loader />;
}
