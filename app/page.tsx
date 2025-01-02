'use client'
import { GetUsers } from "@/api/login";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // GetUsers().then((res) => {
    //   console.log(res);
    // }); 
  })

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        fontWeight: "bold",
      }}
    >
      主页方案待定
      <Link href="/login"><span style={{color: "green"}}>login</span></Link>
    </div>
  );
}
