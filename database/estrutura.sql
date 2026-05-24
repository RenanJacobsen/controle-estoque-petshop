CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  categoria VARCHAR(50),
  fornecedor VARCHAR(100),
  preco_compra NUMERIC(10,2),
  preco_venda NUMERIC(10,2),
  estoque_atual INT DEFAULT 0
);

CREATE TABLE movimentacoes (
  id SERIAL PRIMARY KEY,
  produto_id INT REFERENCES produtos(id),
  tipo VARCHAR(10) CHECK (tipo IN ('entrada','saida')),
  quantidade INT NOT NULL,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
