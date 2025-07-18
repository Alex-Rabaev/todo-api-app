export default {
  schema: "./src/schema",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "./sqlite.db"
  }
}