-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: kitchenstory
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `discount` int NOT NULL,
  `imgname` varchar(255) DEFAULT NULL,
  `kcal` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'non veg',20,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2FMuradabadi-chicken-biryani-1200x900.jpg?alt=media&token=705274ed-aa72-4a80-b601-04d03fd1ddd6','250','chicken fry','600',NULL,'added'),(2,'veg',10,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Ffood5.webp?alt=media&token=0825676a-04e3-4308-afaf-d3ca85167a97','250','dal fry','200',NULL,'added'),(52,'non veg',20,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2F52568357.webp?alt=media&token=661934ae-deb3-47c7-9a7b-5b0e51333b01','200','Mutton Biryani','300','1kg','added'),(102,'non veg',15,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fchicken.seekh.jpg?alt=media&token=4c990ab5-db68-4d97-8ea3-2a1dd211704b','250','chicken kabab','450',NULL,'added'),(103,'veg',15,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fdownload.jfif?alt=media&token=b5f689e7-c90b-492e-ba37-467bdf2ee74d','100','shahi paneer','150',NULL,'added'),(104,'veg',10,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fpizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg?alt=media&token=9d67bc5d-0a7d-49ec-b5ce-f4350f2ca0f8','200','pizza','99','20','added'),(105,'veg',10,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fburger.jpg?alt=media&token=b895963a-b367-49bb-88ad-7ffadcba0d59','200','burger','55','20','added'),(106,'veg',8,'https://firebasestorage.googleapis.com/v0/b/kitchenstory-39828.appspot.com/o/images%2Fphoto-1585032226651-759b368d7246.jfif?alt=media&token=c006bc01-e4df-46ad-8d1e-399d4a71608c','100','noodles','80','10','added');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-23 16:35:00
