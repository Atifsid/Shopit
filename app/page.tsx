"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";
import React, { useEffect } from "react";
import { Loader } from "@/components/Loader";

export default function Home() {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    authState.isLoggedIn ? router.push("/products") : router.push("/login");
  }, [authState.isLoggedIn]);

  return <Loader />;
}
