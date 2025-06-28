"use client";
import styles from "./dashboard.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";

export default function DashboardPage() {
  const router = useRouter();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    } else {
      setUserExists(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/auth");
  };

  if (!userExists) return null;

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
      <Button onClick={handleLogout}>خروج</Button>
    </div>
  );
}
