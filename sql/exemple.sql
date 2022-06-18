CREATE TABLE pessoas (

id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
nome VARCHAR(50) NOT NULL, 
nascimento DATE  
)

INSERT INTO pessoas(nome, nascimento) VALUES('Nathaly', '1990 05 22')
INSERT INTO pessoas(nome, nascimento) VALUES('Arnaldo', '1955 08 18')
INSERT INTO pessoas(nome, nascimento) VALUES('Paulo', '1998 05 20')

SELECT * FROM psessoas ORDER BY nome DESC

ALTER TABLE pessoas ADD genero VARCHAR(1) NOT NULL AFTER nascimento

UPDATE pessoas SET genero= 'F' WHERE id=1
UPDATE pessoas SET genero= 'M' WHERE id=2
UPDATE pessoas SET genero= 'M' WHERE id=3

SELECT * FROM psessoas GROUP BY genero 

SELECT COUNT(genero), genero FROM pessoas GROUP BY genero
