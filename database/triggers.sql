-- Função para impedir estoque negativo
CREATE OR REPLACE FUNCTION impedir_estoque_negativo()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.tipo = 'saida' THEN
    IF (SELECT estoque_atual FROM produtos WHERE id = NEW.produto_id) < NEW.quantidade THEN
      RAISE EXCEPTION 'Estoque insuficiente para saída de % unidades do produto %', NEW.quantidade, NEW.produto_id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger que chama a função antes de inserir movimentações
CREATE TRIGGER trg_impedir_estoque_negativo
BEFORE INSERT ON movimentacoes
FOR EACH ROW
EXECUTE FUNCTION impedir_estoque_negativo();


-- Função para atualizar estoque automaticamente
CREATE OR REPLACE FUNCTION atualizar_estoque()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.tipo = 'entrada' THEN
    UPDATE produtos
    SET estoque_atual = estoque_atual + NEW.quantidade
    WHERE id = NEW.produto_id;
  ELSIF NEW.tipo = 'saida' THEN
    UPDATE produtos
    SET estoque_atual = estoque_atual - NEW.quantidade
    WHERE id = NEW.produto_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger que chama a função após cada inserção em movimentacoes
CREATE TRIGGER trg_atualizar_estoque
AFTER INSERT ON movimentacoes
FOR EACH ROW
EXECUTE FUNCTION atualizar_estoque();
