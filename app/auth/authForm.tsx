"use client";
import styles from "./authForm.module.scss";
import { useState } from "react";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import validatePhone from "@/utils/validatePhone";

export default function AuthForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("شماره موبایل وارد شده معتبر نیست");
      return;
    }

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.results[0]));
      router.push("/dashboard");
    } catch (err) {
      setError("خطا در ورود به سیستم");
    }
  };

  return (
    <div className={styles.form}>
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="شماره موبایل"
        type="tel"
        maxLength={11}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
