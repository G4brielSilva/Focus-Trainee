CREATE DATABASE Acaia_cafe;
CHARACTER SET utf8;
USE Acaia_cafe;
COLLATE utf8_general_ci;
CREATE TABLE categoria(
id INT AUTO_INCREMENT PRIMARY KEY,
nome varchar(50) NOT NULL
);
CREATE TABLE produto(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
preco FLOAT NOT NULL,
ID_categoria INT NOT NULL,
FOREIGN KEY (ID_categoria) REFERENCES categoria(id)
);
CREATE TABLE cliente(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
phone VARCHAR(100)
);
CREATE TABLE pedido(
id INT AUTO_INCREMENT PRIMARY KEY,
ID_cliente INT NOT NULL,
FOREIGN KEY (ID_cliente) REFERENCES cliente(id)
);
CREATE TABLE produto_pedido(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade INT NOT NULL,
ID_produto INT NOT NULL,
ID_pedido INT NOT NULL,
FOREIGN KEY (ID_produto) REFERENCES produto(id),
FOREIGN KEY (ID_pedido) REFERENCES pedido(id)
);
INSERT INTO categoria(nome) VALUES 
('Cafés'), ('Sucos'), ('Refrigerantes Latas'), ('Cervejas Long Neck'), ('Energéticos Lata'), ('MilkShakes(Taça de 500ml)'), ('Pratos Salgados'), ('Pratos Doces');
INSERT INTO produto(nome, preco, ID_categoria) VALUES
('Expresso', 3.50, 1), ('Coado', 4.00, 1), ('Cappuccino', 6.00, 1), ('Café Gelado', 8.00, 1), ('Café do Porto', 9.00, 1), ('Café Macchiato', 10.00, 1),
('Laranja', 8.00, 2), ('Acerola', 8.00, 2), ('Abacaxi', 8.00, 2), ('Abacaxi c/ Hortelã', 8.00, 2), ('Morango', 8.00, 2), ('Maracujá', 8.00, 2),
('Coca', 6.00, 3), ('Fanta Uva', 6.00, 3), ('Fanta Laranja', 6.00, 3), ('Guaraná Antartica', 6.00, 3),
('Heineken', 10.00, 4), ('Stella Artois', 10.00, 4), ('Budweiser', 10.00, 4),
('Red Bull', 12.00, 5), ('Monster', 12.00, 5),
('Morango', 16.00, 6), ('Chocolate', 16.00, 6), ('Coockies', 16.00, 6),
('Quesadillas', 20.00, 7), ('Tapiocas', 12.00, 7), ('Omeletes', 12.00, 7), ('Pão com Linguiça', 14.00, 7), ('Mixto', 8.00, 7), ('Croissant', 6.00, 7), ('Pão de Queijo', 4.00, 7),
('Bolos(fatia)', 7.00, 8), ('Tortas(fatia)', 7.00, 8), ('Petit Gateu', 16.00, 8), ('Waffles com cobertura', 18.00, 8), ('Cupcakes', 10, 8);
