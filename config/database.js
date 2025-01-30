const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres"); // Ensure PostgreSQL is used

  const connections = {
    postgres: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "ai-image-editing"),
        user: env("DATABASE_USERNAME", "account"),
        password: env("DATABASE_PASSWORD", "npg_OPyAd4LuW2hD"),
        ssl: env.bool("DATABASE_SSL", true)
          ? { rejectUnauthorized: false }
          : false,
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
