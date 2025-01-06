"use server";
import { neon } from "@neondatabase/serverless";
import { User } from "./types";

/**
 * @deprecated
 * @param formData
 */
export async function InsertUser(formData: FormData) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const comment = formData.get("comment");
  // Insert the comment from the form into the Postgres database
  await sql("INSERT INTO users (username, ) VALUES ($1)", [comment]);
}

// .env
//DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

export async function GetUsers() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  return await sql`SELECT * FROM temp_users`;
}

export async function login(user: User) {
  console.log(process.env.DATABASE_URL);
  const sql = neon(`${process.env.DATABASE_URL}`);
  sql`select * from temp_users`.then((res) => {
    console.log(res);
  });
  // sql`select user from temp_users where username=${user.username}`.then(
  //   (res) => {
  //     console.log(res);
  //   }
  // );
}
