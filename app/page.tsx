"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";
import React, { useEffect } from "react";
import { Loader } from "@/components/Loader";
import { ROUTES } from "@/constants/routes";

export default function Home() {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    authState.isLoggedIn
      ? router.push(ROUTES.products)
      : router.push(ROUTES.login);
  }, [authState.isLoggedIn]);

  return <Loader />;
}
