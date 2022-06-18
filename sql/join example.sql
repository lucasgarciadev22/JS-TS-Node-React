CREATE TABLE canais( 
INT NOT NULL PRIMARY KEY AUTOINCREMENT id_canal,
VARCHAR(20) NOT NULL nome_canal )

CREATE TABLE videos(
INT NOT NULL PRIMARY KEY AUTOINCREMENT id_video,
VARCHAR(20) NOT NULL nome_video
VARCHAR(20) NOT NULL autor_video
)

CREATE TABLE videos_canais(
INT NOT NULL PRIMARY KEY AUTOINCREMENT id_videos_canais
INT NOT NULL fk_canais
INT NOT NULL fk_videos
)

INSERT INTO canais VALUES ('Chanel A')
INSERT INTO canais VALUES ('Chanel B')
INSERT INTO canais VALUES ('Chanel C')

INSERT INTO videos VALUES ('Video A')
INSERT INTO videos VALUES ('Video B')
INSERT INTO videos VALUES ('Video C')

SELECT * FROM videos
SELECT * FROM canais

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_videos= videos.id_video 
SELECT * FROM videos_canais AS vc JOIN videos AS v ON videos_canais.fk_videos= videos.id_video 
JOIN canais AS c ON vc.fk_canais=c.id_canal

SELECT * FROM videos_canais AS vc INNER JOIN videos AS v ON vc.fk_videos = v.id_video 
INNER JOIN canais AS c ON vc.fk_canais = c.id_canal

SELECT * FROM videos_canais AS vc OUTER JOIN videos AS v ON vc.fk_videos = v.id_video 
OUTER JOIN canais AS c ON vc.fk_canais = c.id_canal

SELECT * FROM videos_canais AS vc LEFT OUTER JOIN videos AS v ON vc.fk_videos = v.id_video
-- não relacionado com informações da tabela consultada na esquerda 
SELECT * FROM videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_videos = v.id_video
-- só pode usar union quando o numero de colunas em ambas tabelas são idênticos
SELECT * v.id_video, v.nome_video FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON v.id_video = vc.fk_videos
UNION
SELECT * c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT OUTER JOIN canais AS c ON vc.fk_canais = c.id_canal

INSERT INTO canais VALUES ('Chanel D')
INSERT INTO videos VALUES ('Video D')
INSERT INTO videos_canais (id_videos_canais, fk_canais, fk_videos) VALUES ('5','4','5')

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_videos = videos.id_video
JOIN canais ON videos_canais.fk_canais = id_canal 
--usar cláusula where para filtrar informações específicas após as consultas de união
WHERE canais.id_canal=2