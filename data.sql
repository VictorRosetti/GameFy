-- MySQL dump 10.16  Distrib 10.1.48-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	10.1.48-MariaDB-0+deb9u2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atividades`
--

DROP TABLE IF EXISTS `atividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atividades` (
  `id` tinyint(4) DEFAULT NULL,
  `tipo` tinyint(4) DEFAULT NULL,
  `disciplina` varchar(11) DEFAULT NULL,
  `tema` varchar(9) DEFAULT NULL,
  `tentativas` tinyint(4) DEFAULT NULL,
  `pergunta` varchar(16) DEFAULT NULL,
  `resposta_1` varchar(5) DEFAULT NULL,
  `resposta_2` varchar(6) DEFAULT NULL,
  `resposta_3` varchar(6) DEFAULT NULL,
  `resposta_4` varchar(6) DEFAULT NULL,
  `resposta_5` varchar(6) DEFAULT NULL,
  `resposta_correta` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividades`
--

LOCK TABLES `atividades` WRITE;
/*!40000 ALTER TABLE `atividades` DISABLE KEYS */;
INSERT INTO `atividades` VALUES (1,1,'programacao','logica',2,'asdfffasdsaddddd','certo','errado','errado','errado','errado',5),(2,1,'programacao','logica',2,'asdfffasdsaddddd','certo','errado','errado','errado','errado',5),(3,1,'programacao','logica',2,'asdfffasdsaddddd','certo','errado','errado','errado','errado',5),(4,3,'programacao','ordenacao',1,'fafsasfasfasfasf','0','0','0','0','0',0),(5,2,'programacao','variaveis',1,'abcd <campo>','a','b','c','d','e',0);
/*!40000 ALTER TABLE `atividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cursos` (
  `id` varchar(0) DEFAULT NULL,
  `nome` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos_ies`
--

DROP TABLE IF EXISTS `cursos_ies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cursos_ies` (
  `curso_id` varchar(0) DEFAULT NULL,
  `ies_id` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos_ies`
--

LOCK TABLES `cursos_ies` WRITE;
/*!40000 ALTER TABLE `cursos_ies` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos_ies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos_turmas`
--

DROP TABLE IF EXISTS `cursos_turmas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cursos_turmas` (
  `curso_id` varchar(0) DEFAULT NULL,
  `turma_id` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos_turmas`
--

LOCK TABLES `cursos_turmas` WRITE;
/*!40000 ALTER TABLE `cursos_turmas` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos_turmas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disciplinas` (
  `id` varchar(0) DEFAULT NULL,
  `nome` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplinas`
--

LOCK TABLES `disciplinas` WRITE;
/*!40000 ALTER TABLE `disciplinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `disciplinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ies`
--

DROP TABLE IF EXISTS `ies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ies` (
  `id` varchar(0) DEFAULT NULL,
  `nome` varchar(0) DEFAULT NULL,
  `sigla` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ies`
--

LOCK TABLES `ies` WRITE;
/*!40000 ALTER TABLE `ies` DISABLE KEYS */;
/*!40000 ALTER TABLE `ies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqlite_sequence`
--

DROP TABLE IF EXISTS `sqlite_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sqlite_sequence` (
  `name` varchar(10) DEFAULT NULL,
  `seq` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqlite_sequence`
--

LOCK TABLES `sqlite_sequence` WRITE;
/*!40000 ALTER TABLE `sqlite_sequence` DISABLE KEYS */;
INSERT INTO `sqlite_sequence` VALUES ('usuarios',2),('atividades',5);
/*!40000 ALTER TABLE `sqlite_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temas`
--

DROP TABLE IF EXISTS `temas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temas` (
  `id` varchar(0) DEFAULT NULL,
  `tema` varchar(0) DEFAULT NULL,
  `conteudo` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temas`
--

LOCK TABLES `temas` WRITE;
/*!40000 ALTER TABLE `temas` DISABLE KEYS */;
/*!40000 ALTER TABLE `temas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turmas`
--

DROP TABLE IF EXISTS `turmas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turmas` (
  `id` varchar(0) DEFAULT NULL,
  `ano_inicio` varchar(0) DEFAULT NULL,
  `semestre_inicio` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turmas`
--

LOCK TABLES `turmas` WRITE;
/*!40000 ALTER TABLE `turmas` DISABLE KEYS */;
/*!40000 ALTER TABLE `turmas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` tinyint(4) DEFAULT NULL,
  `nome` varchar(1) DEFAULT NULL,
  `email` varchar(3) DEFAULT NULL,
  `senha` varchar(1) DEFAULT NULL,
  `titulo` tinyint(4) DEFAULT NULL,
  `professor` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'v','v@v','v',1,0),(2,'b','b@b','b',0,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_atividades`
--

DROP TABLE IF EXISTS `usuarios_atividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_atividades` (
  `usuario_id` varchar(0) DEFAULT NULL,
  `atividade_id` varchar(0) DEFAULT NULL,
  `acertos` varchar(0) DEFAULT NULL,
  `erros` varchar(0) DEFAULT NULL,
  `total_tentativas` varchar(0) DEFAULT NULL,
  `primeira_tentativa` varchar(0) DEFAULT NULL,
  `ultima_tentativa` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_atividades`
--

LOCK TABLES `usuarios_atividades` WRITE;
/*!40000 ALTER TABLE `usuarios_atividades` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_atividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_turmas`
--

DROP TABLE IF EXISTS `usuarios_turmas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_turmas` (
  `usuario_id` varchar(0) DEFAULT NULL,
  `turma_id` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_turmas`
--

LOCK TABLES `usuarios_turmas` WRITE;
/*!40000 ALTER TABLE `usuarios_turmas` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_turmas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 11:52:12
