import postgres from "pg";

const { Client } = postgres;

export const client = new Client({
    host: "db.aekdbzirudnmxzgatrkc.supabase.co",
    user: "postgres",
    password: "bagasrizky123",
    database: "postgres"
});

await client.connect();
console.log("Database loaded!");