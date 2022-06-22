drop database exercício12;
create database exercício12;
use exercício12;

create table FORNECEDOR(
oc_codoc int not null)
default charset=uft8;

create table CLIENTE(
codcliente int not null auto_increment,
nome varchar(10) not null,
ped_codpedido int not null,
foreign key (ped_codpedido) references PEDIDO(codpedido),
primary key(codcliente))
default charset=uft8;

create table ENTREGA(
itementr varchar(10) not null,
itemdistr varchar(10) not null)
default charset=uft8;

create table PECA(
for_itemoc varchar(10) not null,
ped_itemped varchar(10) not null)
default charset=uft8;

create table RECEPT(
codrecept int not null,
codpeca int not null,
itembusca varchar(10) not null,
corredor int not null)
default charset=uft8;

create table PEDIDO(
codpedido int not null auto_increment,
rampa_codrampa int not null,
itemped varchar(10) not null,
foreign key (rampa_codrampa) references RAMPA(codrampa),
primary key (codpedido))
default charset=uft8;

create table RAMPA(
codrampa int not null auto_increment,
primary key(codrampa))
default charset=uft8;



