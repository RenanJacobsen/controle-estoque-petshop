const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const produtosRouter = require('./routes/produtos');
app.use('/produtos', produtosRouter);

const movimentacoesRouter = require('./routes/movimentacoes');
app.use('/movimentacoes', movimentacoesRouter);

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
