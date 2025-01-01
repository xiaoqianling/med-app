import { neon } from "@neondatabase/serverless";

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
