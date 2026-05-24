const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'estoque_petshop',
  password: 'Rfj2691',
  port: 5432,
});

module.exports = pool;
