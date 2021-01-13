require('dotenv/config');
const {
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DEV_DATABASE,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env;

module.exports = {
  development: {
    databases: {
      rest: {
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DEV_DATABASE,
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        dialect: 'postgres'
      }
    }
  },

  production: {
    databases: {
      rest: {
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DEV_DATABASE,
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        dialect: 'postgres'
      }
    }
  }
}