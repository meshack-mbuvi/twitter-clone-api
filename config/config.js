require ('dotenv').config ();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  staging: {
    use_env_variable: 'DATABASE_URL',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};
