"use client";
import Link from "next/link";
import Layout from "./(layout)/layout";
import { useEffect } from "react";
import { login } from "@/api/users";

export default function Home() {
  useEffect(() => {
    console.log(process.env);

    login({
      username: "qianling",
      password: "123456",
    });
  });

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        主页
        <Link href={"/login"}>前往登录页</Link>
      </div>
    </Layout>
  );
}
