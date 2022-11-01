BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "formacao" (
	"curso"	TEXT,
	"inicio"	INTEGER,
	"fim"	INTEGER,
	"instituicao"	TEXT
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"empresa"	TEXT,
	"inicio"	INTEGER,
	"fim"	INTEGER,
	"cargo"	TEXT,
	"cod_usuario"	INTEGER
);
CREATE TABLE IF NOT EXISTS "projetos" (
	"inicio"	INTEGER,
	"fim"	INTEGER,
	"descricao"	TEXT,
	"nome"	TEXT
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"nome"	TEXT,
	"nivel"	TEXT
);
CREATE TABLE IF NOT EXISTS "perfil" (
	"nome"	TEXT,
	"telefone"	INTEGER,
	"email"	TEXT,
	"endereco"	TEXT,
	"linkedin"	TEXT,
	"cargo"	TEXT,
	"id_usuario"	INTEGER,
	PRIMARY KEY("id_usuario")
);
INSERT INTO "Perfil" ("Nome","Telefone","Email","Endereço","LinkedIn","Cargo","id_usuario") VALUES (NULL,'',NULL,NULL,NULL,NULL,1);
COMMIT;
