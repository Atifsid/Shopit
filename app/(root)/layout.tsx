"use client";
import Header from "@/components/Header";
import { useEffect } from "react";
import { ROUTES } from "@/constants/routes";
import { getToken, isTokenValid } from "@/utils/functions";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (!isTokenValid(getToken())) {
      redirect(ROUTES.login);
    }
  }, []);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
