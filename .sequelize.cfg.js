require('dotenv').config({ debug: process.env.DEBUG });

module.exports = {
  database: process.env.SQLITE_DATABASE,
  user: process.env.SQLITE_USER,
  password: process.env.SQLITE_PASSWORD,
  option: {
    storage: process.env.SQLITE_STORAGE,
    host: process.env.SQLITE_HOST,
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    additional: {
      timestamps: false
    },
  },
};
