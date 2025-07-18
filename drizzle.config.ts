export default {
  schema: "./src/schema",
  out: "./drizzle/migrations",
  driver: "better-sqlite3",
  dbCredentials: {
    url: "./sqlite.db"
  }
}