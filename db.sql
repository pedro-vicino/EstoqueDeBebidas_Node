create database estoque_bebidas;
use estoque_bebidas;
create table bebida(
id_bebida int primary key auto_increment not null,
tipo varchar(30) not null,
marca varchar(30) not null,
fornecedor varchar(30) not null,
preco_compra float not null,
preco_venda float not null,
quantidade int not null,
total_compra float not null,
total_venda float not null,
data_entrada date not null,
data_validade date not null
);
create table usuario(
id_usuario int primary key auto_increment not null,
nome_usuario varchar(60) not null,
senha_usuario varchar(60) not null,
isAdmin int not null
);