const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'estoque_petshop',
  password: 'Rfj2691',
  port: 5432,
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produtos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  console.log("Dados recebidos:", req.body);
  const { nome, categoria, fornecedor, preco_compra, preco_venda, estoque_atual } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO produtos (nome, categoria, fornecedor, preco_compra, preco_venda, estoque_atual) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, categoria, fornecedor, preco_compra, preco_venda, estoque_atual]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;


router.post('/', async (req, res) => {
  console.log("Dados recebidos:", req.body);
});
