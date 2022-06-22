drop database exercicio_10;
create database exercicio_10;
use exercicio_10;
create table curso (
siglacurso varchar(2) not null,
descricao varchar(40),
cargahoraria int,
primary key(siglacurso)
)default charset=utf8;
create table turma (
siglaturma varchar(5) not null,
descricao varchar(40),
capacidade int,
primary key(siglaturma)
)default charset=utf8;
create table aluno (
matricula int not null auto_increment,
nome varchar(40),
datanascimento datetime,
valormensalidade float,
siglacurso1 varchar(2),
siglaturma1 varchar(5),
primary key(matricula),
foreign key(siglacurso1) references curso(siglacurso),
foreign key(siglaturma1) references turma(siglaturma)
)default charset=utf8;

insert into curso values
('M','Mecânica',1500),
('E','Eletrônica',1500),
('MA','Matemática',2500),
('P','Programação',550),
('IN','Informática',100);
select*from curso;
insert into aluno values
(default,'Rickson','2001-04-25 05:30:01',715.50,'M','MEC01'),
(default,'Dagson','2000-11-15 18:35:40',450.50,'E','ELT02'),
(default,'Ronaldo','2005-05-02 08:50:00',250.00,'MA','MAT03'),
(default,'Rosane','1999-08-20 17:05:51',640.00,'P','PRG04'),
(default,'Fred','2005-02-01 12:12:12',500.50,'IN','INF05');
select*from aluno;
insert into turma values
('MEC01','Téc. Mecanica Turma 01',25),
('ELT02','Téc. Eletrônica Turma 02',20),
('MAT03','Lic. Matemática Turma 03',15),
('PRG04','Téc. Programação Turma 04',25),
('INF05','Téc. Informática Turma 05',35);
select*from turma;

select a.nome, a.datanascimento
from aluno as a
join curso as c
on a.siglacurso1=c.siglacurso
where a.siglacurso1='IN';

select a.nome, t.descricao
from aluno as a
join turma as t
on a.siglaturma1=t.siglaturma
where a.datanascimento>'2005-01-01';

select a.nome, c.descricao
from aluno as a
join curso as c
on a.siglacurso1=c.siglacurso
where a.valormensalidade>450;
select a.datanascimento, a.matricula
from aluno as a
join curso as c
on a.siglacurso1=c.siglacurso
where a.siglacurso1='M';
select a.nome, a.valormensalidade, t.descricao
from aluno as a
join turma as t
on a.siglaturma1=t.siglaturma
where t.capacidade<20;
select a.nome, c.descricao
from aluno as a
join curso as c
on a.siglacurso1=c.siglacurso
where c.cargahoraria>500;
/*----------------------------EXERCÍCIO 2-----------------------------------------------------*/
create database clinica;
use clinica;
create table medico (
cremers int not null,
nome varchar(40),
primary key(cremers)
)default charset=utf8;
create table paciente (
cpf int not null,
nome varchar(40),
primary key(cpf)
)default charset=utf8;
create table medicamento (
codanvisa int(11) not null,
nome varchar(40),
primary key(codanvisa)
)default charset=utf8;
create table consulta (
id int not null auto_increment,
dia date,
idmedico int,
idpaciente int,
primary key(id),
foreign key(idmedico) references medico(cremers),
foreign key(idpaciente) references paciente(cpf)
)default charset=utf8;
create table prescricao (
idpresc int not null auto_increment,
idconsulta int,
idmedicamento int,
primary key(idpresc),
foreign key(idconsulta) references consulta(id),
foreign key(idmedicamento) references medicamento(codanvisa)
)default charset=utf8;

insert into medico values
(111111,'Fernando Lopes'),
(222222,'Leandro Silveira'),
(333333,'Clarissa'),
(444444,'Joana'),
(555555,'Rafaela');
insert into paciente values
(00011100011,'Joao da Silva'),
(00011100022,'Roberto'),
(00011100033,'Rogerio'),
(00011100044,'Ivonilda'),
(00011100055,'Heinz'),
(00011100066,'Zenildo'),
(00011100077,'Frederico'),
(00011100088,'Lucimara'),
(00011100099,'Dieter'),
(00011111100,'Bruna');
insert into medicamento values
(000000001,'Hidroxicloroquina'),
(000000002,'Clonazepam'),
(000000003,'Rivotril'),
(000000004,'Xanax'),
(000000005,'Paracetamol'),
(000000006,'Doril'),
(000000007,'Fenilcedrintopmina'),
(000000008,'Azitromicina'),
(000000009,'Invermectina'),
(000000010,'Ibuprofenol');
insert into consulta values
(default,'2001-01-01',111111,00011111111),
(default,'2002-01-01',111111,00022222222),
(default,'2003-01-01',111111,00033333333),
(default,'2004-01-01',111111,00044444444),
(default,'2005-01-01',222222,00055555555),
(default,'2006-01-01',222222,00066666666),
(default,'2007-01-01',222222,00077777777),
(default,'2008-01-01',222222,00088888888),
(default,'2009-01-01',333333,00099999999),
(default,'2010-01-01',333333,00010101010),
(default,'2018-01-09',333333,00011011011),
(default,'2019-01-01',333333,00012121212),
(default,'2013-01-01',444444,00013131313),
(default,'2014-01-01',444444,00014141414),
(default,'2015-01-01',444444,00015151515),
(default,'2016-01-01',444444,00016161616),
(default,'2017-01-01',555555,00017171717),
(default,'2018-01-01',555555,00018181818),
(default,'2019-01-01',555555,00019191919),
(default,'2020-01-01',555555,00020202020);
insert into prescricao values
(default,1,000000001),
(default,2,000000002),
(default,3,000000003),
(default,4,000000004),
(default,5,000000005),
(default,6,000000006),
(default,7,000000007),
(default,8,000000008),
(default,9,000000009),
(default,10,000000010);

select r.nome from medicamento r	
inner join prescricao p
on r.codanvisa = p.idmedicamento
inner join consulta c
on c.id = p.idconsulta
inner join medico m
on m.cremers = c.idmedico
where m.nome='Fernado Lopes';
select r.nome from medicamento r
inner join prescricao p
on r.codAnvisa = p.idmedicamento
inner join consulta c
on c.id = p.idconsulta
inner join paciente a
on a.cpf = c.idpaciente
where a.nome='Joao da Silva';
select a.nome from paciente a
inner join consulta c
on a.cpf = c.idpaciente
inner join medico m
on m.cremers = c.idmedico
where m.nome='Leandro Silveira';
select a.nome from paciente a
inner join consulta c
on a.cpf = c.idpaciente
inner join medico m
on m.cremers = c.idmedico
where m.nome='Clarissa'
and c.dia > '2019-01-01';


