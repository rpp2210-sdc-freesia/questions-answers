const { Pool, Client } = require('pg');

const client = new Pool({
  user: 'postgres',
  host: 'db', // use db if connecting with docker // use localhost if testing locally
  database: 'sdc',
  password: 'mysecretpassword',
  port: 5432,
  // allowExitOnIdle: true
});

module.exports = { client };