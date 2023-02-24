BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "ies" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	"sigla"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "cursos" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "disciplinas" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "temas" (
	"id"	INTEGER NOT NULL UNIQUE,
	"tema"	TEXT NOT NULL,
	"conteudo"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "turmas" (
	"id"	INTEGER NOT NULL UNIQUE,
	"ano_inicio"	INTEGER NOT NULL,
	"semestre_inicio"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "cursos_ies" (
	"curso_id"	INTEGER,
	"ies_id"	INTEGER,
	PRIMARY KEY("curso_id","ies_id"),
	FOREIGN KEY("ies_id") REFERENCES "ies"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
	FOREIGN KEY("curso_id") REFERENCES "cursos"("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE IF NOT EXISTS "cursos_turmas" (
	"curso_id"	INTEGER,
	"turma_id"	INTEGER,
	PRIMARY KEY("curso_id","turma_id"),
	FOREIGN KEY("turma_id") REFERENCES "turmas"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
	FOREIGN KEY("curso_id") REFERENCES "cursos"("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE IF NOT EXISTS "usuarios_turmas" (
	"usuario_id"	INTEGER,
	"turma_id"	INTEGER,
	PRIMARY KEY("usuario_id","turma_id"),
	FOREIGN KEY("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
	FOREIGN KEY("turma_id") REFERENCES "turmas"("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE IF NOT EXISTS "usuarios_atividades" (
	"usuario_id"	INTEGER,
	"atividade_id"	INTEGER,
	"acertos"	INTEGER NOT NULL,
	"erros"	INTEGER NOT NULL,
	"total_tentativas"	INTEGER NOT NULL,
	"primeira_tentativa"	datetime DEFAULT current_timestamp,
	"ultima_tentativa"	datetime DEFAULT current_timestamp,
	PRIMARY KEY("usuario_id","atividade_id"),
	FOREIGN KEY("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
	FOREIGN KEY("atividade_id") REFERENCES "atividades"("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE IF NOT EXISTS "usuarios" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	"email"	TEXT NOT NULL UNIQUE,
	"senha"	TEXT NOT NULL,
	"titulo"	TEXT,
	"professor"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "atividades" (
	"id"	INTEGER NOT NULL UNIQUE,
	"tipo"	INTEGER NOT NULL,
	"disciplina"	TEXT NOT NULL,
	"tema"	TEXT NOT NULL,
	"tentativas"	INTEGER NOT NULL,
	"pergunta"	TEXT NOT NULL,
	"resposta_1"	TEXT NOT NULL,
	"resposta_2"	TEXT NOT NULL,
	"resposta_3"	TEXT,
	"resposta_4"	TEXT,
	"resposta_5"	TEXT,
	"resposta_correta"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "usuarios" VALUES (1,'v','v@v','v','1',0);
INSERT INTO "usuarios" VALUES (2,'b','b@b','b','0',0);
INSERT INTO "atividades" VALUES (1,1,'programacao','logica',2,'asdfffasdsaddddd','certo','errado','errado','errado','errado',5);
INSERT INTO "atividades" VALUES (2,1,'programacao','logica',2,'asdfffasdsaddddd','certo','errado','errado','errado','errado',5);
INSERT INTO "atividades" VALUES (3,1,'programacao','logica',2,'asdfffasdsaddddd','certo','errado','errado','errado','errado',5);
INSERT INTO "atividades" VALUES (4,3,'programacao','ordenacao',1,'fafsasfasfasfasf','0','0','0','0','0',0);
INSERT INTO "atividades" VALUES (5,2,'programacao','variaveis',1,'abcd <campo>','a','b','c','d','e',0);
COMMIT;
