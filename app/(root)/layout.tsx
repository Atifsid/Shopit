"use client";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(ROUTES.login);
    }
  }, [isLoggedIn]);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
