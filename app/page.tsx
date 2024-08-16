"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = false;
  isLoggedIn ? router.push("/products") : router.push("/login");

  return null;
}
