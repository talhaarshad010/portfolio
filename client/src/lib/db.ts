// db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@shared/schema"; // Update the path if needed
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.MONGODB_URI, // Ensure this is in your .env file
});

export const db = drizzle(pool, { schema });
