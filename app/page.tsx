"use client";
import Link from "next/link";
import Layout from "./(layout)/layout";
import { testCs } from "@/api/users/cs";

export default function Home() {
  console.log(process.env.DATABASE_URL);
  testCs().then((res) => {
    console.log(res);
  });

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        主页
        <Link href={"/login"}>前往登录页</Link>
      </div>
    </Layout>
  );
}
