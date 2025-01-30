const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres"); // Ensure PostgreSQL is used

  return {
    connection: {
      client,
      connection: env("DATABASE_URL"), // Use the DATABASE_URL from the .env file
      ssl: env.bool("DATABASE_SSL", true)
        ? { rejectUnauthorized: false }
        : false, // Use SSL for secure connection
    },
    pool: { min: 2, max: 10 }, // Connection pool settings for PostgreSQL
    acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000), // Optional: Timeout settings for acquiring a connection
  };
};
