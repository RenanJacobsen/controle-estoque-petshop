# 🐾 Controle de Estoque Petshop

Sistema completo para gerenciamento de produtos e movimentações de estoque em um petshop.  
Inclui **frontend (React)**, **backend (Node.js/Express)** e scripts de **banco de dados (PostgreSQL)**.

---

## 📂 Estrutura do Projeto
controle-estoque-petshop/
├── estoque-petshop-frontend/      # Aplicação React
├── estoque-petshop-backend/       # API Node.js/Express
├── database/      # Scripts SQL e migrations
└── README.md

---

## 🚀 Tecnologias Utilizadas
- **Frontend:** React, Axios
- **Backend:** Node.js, Express, PostgreSQL
- **Banco de Dados:** PostgreSQL (com scripts SQL para criação de tabelas e dados iniciais)

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/RenanJacobsen/controle-estoque-petshop.git
cd controle-estoque-petshop

### 2. Configurar o banco de dados
Crie um banco PostgreSQL.

Execute os scripts em database/schema.sql e database/seed.sql.

3. Rodar o backend
cd estoque-petshop-backend
node server.js

O backend ficará disponível em http://localhost:4000.

4. Rodar o frontend
cd estoque-petshop-frontend
npm start

O frontend ficará disponível em http://localhost:3000.

📊 Funcionalidades
Cadastro de produtos

Consulta de estoque atual

Registro de movimentações (entrada/saída)

Relatórios de movimentações

🔒 Configuração
Crie um arquivo .env no backend com as credenciais do banco:
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=estoque_petshop

👨‍💻 Autor
Projeto desenvolvido por Renan Jacobsen e outros alunos da Univesp, para materia de projeto integrador III.



