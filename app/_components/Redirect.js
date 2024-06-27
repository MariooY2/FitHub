"use client";
import { useRouter } from "next/navigation";

export function RedirecttoDashboard() {
  const router = useRouter();

  router.push("/dashboard");
}
