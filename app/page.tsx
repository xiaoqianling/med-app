"use client";
import Layout from "./(layout)/layout";
import { testCs } from "@/api/users/cs";
import Cards from "@/components/cards/cards";

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
          fontWeight: "bold",
          width: "100%",
          height: "100%"
        }}
      >
        <Cards />
      </div>
    </Layout>
  );
}
