-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: job_sys
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `company_image_url` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `cv_download_url` varchar(255) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `experience` int(11) NOT NULL,
  `job_description` varchar(255) DEFAULT NULL,
  `job_type` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `max_salary` double NOT NULL,
  `min_salary` double NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKihd6m3auwpenduntl3e1opcoq` (`user_id`),
  CONSTRAINT `FKihd6m3auwpenduntl3e1opcoq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,'Marketing','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png','Google','sdewe','2024-10-30',1,'Marketing Job','Remote','Remote',20000,10000,'Marketing Manager',1),(2,'Marketing','https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg','Google','dgdsg','2024-10-15',1,'asfafa','Remote','Remote',20000,10000,'Marketing Manager',2),(3,'Marketing','https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png','Google','dgdsg','2024-10-29',1,'ffdsfsf','Remote','Remote',20000,10000,'Marketing Manager',NULL),(4,'Marketing','https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png','Google','dgdsg','2024-10-16',1,'sfsfs','Remote','Remote',20000,10000,'Marketing Manager',NULL);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_application`
--

DROP TABLE IF EXISTS `job_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_application` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `applicant_email` varchar(255) DEFAULT NULL,
  `applicant_name` varchar(255) DEFAULT NULL,
  `applicant_phone` varchar(255) DEFAULT NULL,
  `cover_letter` varchar(255) DEFAULT NULL,
  `experience` int(11) NOT NULL,
  `job_id` varchar(255) DEFAULT NULL,
  `max_salary` double NOT NULL,
  `min_salary` double NOT NULL,
  `resume_url` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcbu1yb4kyxowejebm87crxtr8` (`user_id`),
  CONSTRAINT `FKcbu1yb4kyxowejebm87crxtr8` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_application`
--

LOCK TABLES `job_application` WRITE;
/*!40000 ALTER TABLE `job_application` DISABLE KEYS */;
INSERT INTO `job_application` VALUES (2,'admin@gmail.com','dgdd','1213134','fghfg',1,'13',1311,13113,'fddfd',NULL),(3,'admin@gmail.com','dgdd','1213134','fghfg',1,'13',1311,13113,'fddfd',NULL),(4,'admin@gmail.com','dgdd','1213134','fghfg',1,'13',1311,13113,'fddfd',NULL),(5,'admin@gmail.com','dgdd','1213134','fghfg',1,'13',1311,13113,'fddfd',NULL),(6,'admin@gmail.com','dgdd','1213134','fghfg',1,'13',1311,13113,'fddfd',NULL),(7,'admin@gmail.com','rtrt','3535','gfggf',1,'21313',1331,113,'https://github.com/thatsnajmul',NULL);
/*!40000 ALTER TABLE `job_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_details`
--

DROP TABLE IF EXISTS `personal_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `award_name` varchar(255) DEFAULT NULL,
  `award_year` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `certification_name` varchar(255) DEFAULT NULL,
  `certification_year` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `company_name1` varchar(255) DEFAULT NULL,
  `computer_skills` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `designation1` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `gpa1` varchar(255) DEFAULT NULL,
  `institute_name1` varchar(255) DEFAULT NULL,
  `interest_intro` varchar(255) DEFAULT NULL,
  `language_skills` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `passing_year1` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject_name1` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_details`
--

LOCK TABLES `personal_details` WRITE;
/*!40000 ALTER TABLE `personal_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_logged_out` bit(1) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`),
  CONSTRAINT `FKe32ek7ixanakfqsdaokm4q9y2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiSk9CX1NFRUtFUiIsImlhdCI6MTcyNzc4NjcyMywiZXhwIjoxNzI3ODczMTIzfQ._KPVb14RBsioPfgb9A8dBBdYEDlwcgjFWZt2ii3FJQM',1),(2,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiSk9CX1NFRUtFUiIsImlhdCI6MTcyNzc4Njc1NywiZXhwIjoxNzI3ODczMTU3fQ.tg1a4kRrLhd2hpjJUCCAXatBI6uK8OQXJwmT497TNCQ',1),(3,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjc3ODY3OTUsImV4cCI6MTcyNzg3MzE5NX0.J0W33MPiVbX5KuE1RVde4QAuEU6G1mIMScJKE3ZG8i4',1),(4,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llckBnbWFpbC5jb20iLCJyb2xlIjoiSk9CX1NFRUtFUiIsImlhdCI6MTcyNzc4NzM1NiwiZXhwIjoxNzI3ODczNzU2fQ.GMGX7q2lsCy7pBLamNYyf7aTxDkf5uoewMUqS2bgLUI',2),(5,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llckBnbWFpbC5jb20iLCJyb2xlIjoiSk9CX1NFRUtFUiIsImlhdCI6MTcyNzc4NzQyMSwiZXhwIjoxNzI3ODczODIxfQ.CQ9y8qVSqFzcoiV5Sm6RYWifQQdDImTp4pbcaGz98yc',2),(6,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llckBnbWFpbC5jb20iLCJyb2xlIjoiRU1QTE9ZRVIiLCJpYXQiOjE3Mjc3ODc1MjgsImV4cCI6MTcyNzg3MzkyOH0.8DYemIlrNmY1XYkj-LIP9ct-e4lg3sgHWqKvIWI1Y_w',2),(7,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjc3ODc2NjAsImV4cCI6MTcyNzg3NDA2MH0.DJftyd4rPl3Qvu9QI17zfM53hwOSRfPW2OtT7AbbNWg',1),(8,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWptdWxAZ21haWwuY29tIiwicm9sZSI6IkpPQl9TRUVLRVIiLCJpYXQiOjE3Mjc4NTg5NzUsImV4cCI6MTcyNzk0NTM3NX0.3mAlMe3wgR0jLP2TBUMbmit9y1WtOitANQwSL7eEjKI',3),(9,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWptdWxAZ21haWwuY29tIiwicm9sZSI6IkpPQl9TRUVLRVIiLCJpYXQiOjE3Mjc4NTkwMDksImV4cCI6MTcyNzk0NTQwOX0.gwXHgDAu3fV9v40ko2vqH6owiFojp6X8Glh_MoMr7no',3),(10,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjc4NTk0NzIsImV4cCI6MTcyNzk0NTg3Mn0.TsKFdXqe0mg8G9a3abF41wcjEacE35CtgQkDiiIDmYs',1),(11,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llckBnbWFpbC5jb20iLCJyb2xlIjoiRU1QTE9ZRVIiLCJpYXQiOjE3Mjc4NTk0ODUsImV4cCI6MTcyNzk0NTg4NX0.-00h7Et6NjZpfOiXilSH0QKLi28MAYZLzTS17PlvJWM',2),(12,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2JzZWVrZXJAZ21haWwuY29tIiwicm9sZSI6IkpPQl9TRUVLRVIiLCJpYXQiOjE3Mjc4NTk1MDIsImV4cCI6MTcyNzk0NTkwMn0.0e6P-NIGfHE2qSxXJhlAHmDRARajOECD9W9pHv_HqN8',3),(13,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2JzZWVrZXJAZ21haWwuY29tIiwicm9sZSI6IkpPQl9TRUVLRVIiLCJpYXQiOjE3Mjc4NTk2NDIsImV4cCI6MTcyNzk0NjA0Mn0.aY77uIZfkNMjM0EjUWJoHHgQnQ4g_ZcJ47TStD7EdEw',3),(14,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjc4NTk2NTksImV4cCI6MTcyNzk0NjA1OX0.meKRnHmjwNbQaGt8L9yk4fonoPB55U4zOcPO9J7Eyg8',1),(15,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjc4NjAzOTgsImV4cCI6MTcyNzk0Njc5OH0.ADqjHt0TxL1RPUrcpgorxzpO9E2awkKF0FPU0l6cCgI',1),(16,_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llckBnbWFpbC5jb20iLCJyb2xlIjoiRU1QTE9ZRVIiLCJpYXQiOjE3Mjc4NjA0MzMsImV4cCI6MTcyNzk0NjgzM30.OU4zSDJfnWVaOr3lqB3wEN3XBWlG98XZ48Rqce4L0Rk',2),(17,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2JzZWVrZXJAZ21haWwuY29tIiwicm9sZSI6IkpPQl9TRUVLRVIiLCJpYXQiOjE3Mjc4NjA0ODEsImV4cCI6MTcyNzk0Njg4MX0.a6JKhQr_JcyEOZ-r-q6kESkPxzv2zGPCj8cBCkTt0ZM',3),(18,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llckBnbWFpbC5jb20iLCJyb2xlIjoiRU1QTE9ZRVIiLCJpYXQiOjE3Mjc4NjA1NzAsImV4cCI6MTcyNzk0Njk3MH0.RdPuwDGhKR7xFA3DA5r6dB1MSRWhELHiDJdqn1HII8k',2),(19,_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjc4NjA1ODQsImV4cCI6MTcyNzk0Njk4NH0.eWUsRDXiLfgArfEpZIMI0iIM57KU5MRlKy1Ec3kAqlU',1);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cell` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_lock` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','EMPLOYER','JOB_SEEKER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK19ln9le9v947dp777koraktgy` (`cell`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,_binary '','Dhaka','01711111','2024-10-23','admin@gmail.com','male','https://nmhislam.wordpress.com/wp-content/uploads/2016/12/15129046_1776258662641056_826858525416318744_o.jpg',_binary '','Admin','$2a$10$1/n/pmSy3GppGlFYmjKEo.tUciMJrCNhYu4/7UmBUW/Gw2CDl3DyG','ADMIN'),(2,_binary '','Dhaka','01722222','2024-10-10','employer@gmail.com','male','https://nmhislam.wordpress.com/wp-content/uploads/2016/12/15129046_1776258662641056_826858525416318744_o.jpg',_binary '','Employer','$2a$10$d9uKIKXEIu9M.ktuSi592.Vh1BH2NZXpg1ThfuUvtyBIPGiuZy.vS','EMPLOYER'),(3,_binary '','Dhaka','01733333','2024-10-14','jobseeker@gmail.com','male','https://nmhislam.wordpress.com/wp-content/uploads/2016/12/15129046_1776258662641056_826858525416318744_o.jpg',_binary '','Md Najmul Islam','$2a$10$CJ.fIxsIZY322hEbQJXdA./9Hc5El38F/pOxhEfZwy/Amq6Skli3.','JOB_SEEKER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-24 18:09:47
