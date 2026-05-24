INSERT INTO produtos (nome, categoria, fornecedor, preco_compra, preco_venda, estoque_atual)
VALUES
('Ração Premium 10kg', 'Alimentação', 'Fornecedor A', 120.00, 180.00, 50),
('Brinquedo Bola', 'Brinquedos', 'Fornecedor B', 10.00, 25.00, 100),
('Coleira Ajustável', 'Acessórios', 'Fornecedor C', 15.00, 30.00, 40),
('Shampoo Pet', 'Higiene', 'Fornecedor D', 8.00, 20.00, 30);

INSERT INTO movimentacoes (produto_id, tipo, quantidade)
VALUES
(1, 'entrada', 20),
(2, 'saida', 5),
(3, 'entrada', 10),
(4, 'saida', 2);
