const express = require('express');
const router = express.Router();
const pool = require('../db');

// Registrar movimentação
router.post('/', async (req, res) => {
  const { produto_id, tipo, quantidade } = req.body;

  try {
    // Inserir movimentação
    await pool.query(
      'INSERT INTO movimentacoes (produto_id, tipo, quantidade, data) VALUES ($1,$2,$3,NOW())',
      [produto_id, tipo, quantidade]
    );

    // Atualizar estoque
    if (tipo === 'entrada') {
      await pool.query(
        'UPDATE produtos SET estoque_atual = estoque_atual + $1 WHERE id = $2',
        [quantidade, produto_id]
      );
    } else if (tipo === 'saida') {
      await pool.query(
        'UPDATE produtos SET estoque_atual = estoque_atual - $1 WHERE id = $2',
        [quantidade, produto_id]
      );
    }

    res.json({ message: 'Movimentação registrada com sucesso!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// Listar movimentações com nome do produto
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT m.id, m.tipo, m.quantidade, m.data, m.produto_id, p.nome AS produto_nome
      FROM movimentacoes m
      JOIN produtos p ON m.produto_id = p.id
      ORDER BY m.data DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;

