-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2024 at 03:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `animalover`
--

-- --------------------------------------------------------

--
-- Table structure for table `health_record`
--

CREATE TABLE `health_record` (
  `health_id` int(11) NOT NULL,
  `pet_id` int(11) NOT NULL,
  `health_date` date DEFAULT NULL,
  `health_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nutrition_guide`
--

CREATE TABLE `nutrition_guide` (
  `guide_id` int(11) NOT NULL,
  `guide_type` varchar(100) NOT NULL,
  `guide_gene` varchar(100) NOT NULL,
  `guide_gender` enum('ผู้','เมีย') NOT NULL,
  `guide_startweight` decimal(5,2) NOT NULL,
  `guide_endweight` decimal(5,2) NOT NULL,
  `guide_startage` int(11) NOT NULL,
  `guide_endage` int(11) NOT NULL,
  `guide_foodwithage` text DEFAULT NULL,
  `guide_recommended_food` text DEFAULT NULL,
  `guide_avoid_food` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `nutrition_guide`
--

INSERT INTO `nutrition_guide` (`guide_id`, `guide_type`, `guide_gene`, `guide_gender`, `guide_startweight`, `guide_endweight`, `guide_startage`, `guide_endage`, `guide_foodwithage`, `guide_recommended_food`, `guide_avoid_food`) VALUES
(1, 'หมา', 'เล็ก', 'ผู้', 0.00, 10.00, 0, 1, 'อาหารที่มีโปรตีนและไขมันสูง เพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 25-30%, ไขมัน 15-20%', 'Hill\'s Science Diet Puppy Small Paws, Royal Canin Mini Puppy', '-'),
(2, 'หมา', 'เล็ก', 'เมีย', 0.00, 10.00, 0, 1, 'อาหารที่มีโปรตีนและไขมันสูง เพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 25-30%, ไขมัน 15-20%', 'Hill\'s Science Diet Puppy Small Paws, Royal Canin Mini Puppy', '-'),
(3, 'หมา', 'เล็ก', 'ผู้', 0.00, 10.00, 1, 7, 'ต้องการสารอาหารที่ช่วยสร้างกล้ามเนื้อและรักษาน้ำหนักตัว\nสารอาหาร: โปรตีน 18-25%, ไขมัน 10-15%', 'Orijen Small Breed, Wellness CORE Small Breed', '-'),
(4, 'หมา', 'เล็ก', 'เมีย', 0.00, 10.00, 1, 7, 'ควรเลือกอาหารที่มีสารอาหารสมดุลเพื่อสุขภาพดี\nสารอาหาร: โปรตีน 18-25%, ไขมัน 10-15%', 'Orijen Small Breed, Wellness CORE Small Breed', '-'),
(5, 'หมา', 'เล็ก', 'ผู้', 0.00, 10.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อและลดแคลอรี่\nโปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Adult Small Paws Senior, Royal Canin Mini Aging', '-'),
(6, 'หมา', 'เล็ก', 'เมีย', 0.00, 10.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อและลดแคลอรี่\nโปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Adult Small Paws Senior, Royal Canin Mini Aging', '-'),
(7, 'หมา', 'กลาง', 'ผู้', 10.00, 25.00, 0, 1, 'ต้องการโปรตีนและไขมันสูงเพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 25-30%, ไขมัน 15-20%', 'Hill\'s Science Diet Puppy Medium, Royal Canin Medium Puppy', '-'),
(8, 'หมา', 'กลาง', 'เมีย', 10.00, 25.00, 0, 1, 'ต้องการโปรตีนและไขมันสูงเพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 25-30%, ไขมัน 15-20%', 'Hill\'s Science Diet Puppy Medium, Royal Canin Medium Puppy', '-'),
(9, 'หมา', 'กลาง', 'ผู้', 10.00, 25.00, 1, 7, 'ควบคุมสารอาหารเพื่อเสริมกล้ามเนื้อ\nสารอาหาร: โปรตีน 18-25%, ไขมัน 10-15%', 'Wellness CORE RawRev, Hill\'s Science Diet Adult Medium', '-'),
(10, 'หมา', 'กลาง', 'เมีย', 10.00, 25.00, 1, 7, 'ควรเลือกอาหารที่สมดุลเพื่อสุขภาพดี\nสารอาหาร: โปรตีน 18-25%, ไขมัน 10-15%', 'Wellness CORE RawRev, Hill\'s Science Diet Adult Medium', '-'),
(11, 'หมา', 'กลาง', 'ผู้', 10.00, 25.00, 7, 999, 'ควรเลือกอาหารที่ช่วยบำรุงข้อต่อและลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Adult Medium Senior, Royal Canin Medium Aging', '-'),
(12, 'หมา', 'กลาง', 'เมีย', 10.00, 25.00, 7, 999, 'ควรเลือกอาหารที่ช่วยบำรุงข้อต่อและลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Adult Medium Senior, Royal Canin Medium Aging', '-'),
(13, 'หมา', 'ใหญ่', 'ผู้', 25.00, 999.00, 0, 1, 'อาหารที่มีโปรตีนสูงและพลังงานสูงเพื่อการเจริญเติบโต\nสารอาหาร: โปรตีน 22-30%, ไขมัน 12-18%', 'Royal Canin Giant Puppy, Hill\'s Science Diet Large Breed Puppy', '-'),
(14, 'หมา', 'ใหญ่', 'เมีย', 25.00, 999.00, 0, 1, 'อาหารที่มีโปรตีนสูงและพลังงานสูงเพื่อการเจริญเติบโต\nสารอาหาร: โปรตีน 22-30%, ไขมัน 12-18%', 'Royal Canin Giant Puppy, Hill\'s Science Diet Large Breed Puppy', '-'),
(15, 'หมา', 'ใหญ่', 'ผู้', 25.00, 999.00, 1, 7, 'ควรเลือกอาหารที่มีสารอาหารช่วยเพิ่มกล้ามเนื้อ\nสารอาหาร: โปรตีน 18-25%, ไขมัน 8-15%', 'Royal Canin Giant Adult, Hill\'s Science Diet Adult Large Breed', '-'),
(16, 'หมา', 'ใหญ่', 'เมีย', 25.00, 999.00, 1, 7, 'เลือกอาหารที่ช่วยควบคุมน้ำหนักตัว\nสารอาหาร: โปรตีน 18-25%, ไขมัน 8-15%', 'Royal Canin Giant Adult, Hill\'s Science Diet Adult Large Breed', '-'),
(17, 'หมา', 'ใหญ่', 'ผู้', 25.00, 999.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อ เช่น กลูโคซามีนและคอนโดรอิติน พร้อมลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Royal Canin Giant Senior, Hill\'s Science Diet Large Breed Senior', '-'),
(18, 'หมา', 'ใหญ่', 'เมีย', 25.00, 999.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อ เช่น กลูโคซามีนและคอนโดรอิติน พร้อมลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Royal Canin Giant Senior, Hill\'s Science Diet Large Breed Senior', '-'),
(19, 'แมว', 'เล็ก', 'ผู้', 0.00, 4.00, 0, 1, 'ต้องการอาหารที่มีโปรตีนสูงเพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 30-35%, ไขมัน 15-20%', 'Hill\'s Science Diet Kitten, Royal Canin Kitten', '-'),
(20, 'แมว', 'เล็ก', 'เมีย', 0.00, 4.00, 0, 1, 'ต้องการอาหารที่มีโปรตีนสูงเพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 30-35%, ไขมัน 15-20%', 'Hill\'s Science Diet Kitten, Royal Canin Kitten', '-'),
(21, 'แมว', 'เล็ก', 'ผู้', 0.00, 4.00, 1, 7, 'ควรเลือกอาหารที่มีโปรตีนสูงและแคลอรี่เพียงพอเพื่อเสริมกล้ามเนื้อ\nสารอาหาร: โปรตีน 25-30%, ไขมัน 10-15%', 'Hill\'s Science Diet Adult Cat, Wellness CORE Grain-Free', '-'),
(22, 'แมว', 'เล็ก', 'เมีย', 0.00, 4.00, 1, 7, 'ควรเลือกอาหารที่มีสารอาหารสมดุลเพื่อรักษาน้ำหนักและสุขภาพ\nสารอาหาร: โปรตีน 25-30%, ไขมัน 10-15%', 'Hill\'s Science Diet Adult Cat, Wellness CORE Grain-Free', '-'),
(23, 'แมว', 'เล็ก', 'ผู้', 0.00, 4.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อและลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Senior, Royal Canin Aging 12+', '-'),
(24, 'แมว', 'เล็ก', 'เมีย', 0.00, 4.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อและลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Senior, Royal Canin Aging 12+', '-'),
(25, 'แมว', 'กลาง', 'ผู้', 4.00, 8.00, 0, 1, 'ต้องการอาหารที่มีโปรตีนและไขมันสูงเพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 30-35%, ไขมัน 15-20%', 'Royal Canin Kitten, Hill\'s Science Diet Kitten', '-'),
(26, 'แมว', 'กลาง', 'เมีย', 4.00, 8.00, 0, 1, 'ต้องการอาหารที่มีโปรตีนและไขมันสูงเพื่อการเจริญเติบโตที่ดี\nสารอาหาร: โปรตีน 30-35%, ไขมัน 15-20%', 'Royal Canin Kitten, Hill\'s Science Diet Kitten', '-'),
(27, 'แมว', 'กลาง', 'ผู้', 4.00, 8.00, 1, 7, 'ควรเลือกอาหารที่มีโปรตีนสูงและเพิ่มพลังงานสำหรับกล้ามเนื้อ\nสารอาหาร: โปรตีน 25-30%, ไขมัน 10-15%', 'Blue Buffalo Wilderness, Orijen Cat & Kitten', '-'),
(28, 'แมว', 'กลาง', 'เมีย', 4.00, 8.00, 1, 7, 'ควรเลือกอาหารที่ให้สารอาหารสมดุล\nสารอาหาร: โปรตีน 25-30%, ไขมัน 10-15%', 'Blue Buffalo Wilderness, Orijen Cat & Kitten', '-'),
(29, 'แมว', 'ใหญ่', 'ผู้', 8.00, 999.00, 0, 1, 'อาหารที่มีโปรตีนสูงและพลังงานสูงเพื่อการเจริญเติบโต\nสารอาหาร: โปรตีน 30-35%, ไขมัน 15-20%', 'Hill\'s Science Diet Kitten Large Breed, Royal Canin Maine Coon Kitten', '-'),
(30, 'แมว', 'ใหญ่', 'เมีย', 8.00, 999.00, 0, 1, 'อาหารที่มีโปรตีนสูงและพลังงานสูงเพื่อการเจริญเติบโต\nสารอาหาร: โปรตีน 30-35%, ไขมัน 15-20%', 'Hill\'s Science Diet Kitten Large Breed, Royal Canin Maine Coon Kitten', '-'),
(31, 'แมว', 'ใหญ่', 'ผู้', 8.00, 999.00, 1, 7, 'ควรเลือกอาหารที่ช่วยเสริมกล้ามเนื้อและให้พลังงานสูง\nสารอาหาร: โปรตีน 25-30%, ไขมัน 10-15%', 'Hill\'s Science Diet Adult Large Breed, Blue Buffalo Wilderness', '-'),
(32, 'แมว', 'ใหญ่', 'เมีย', 8.00, 999.00, 1, 7, 'ควรเลือกอาหารที่มีสารอาหารสมดุลเพื่อรักษาน้ำหนัก\nสารอาหาร: โปรตีน 25-30%, ไขมัน 10-15%', 'Hill\'s Science Diet Adult Large Breed, Blue Buffalo Wilderness', '-'),
(33, 'แมว', 'ใหญ่', 'ผู้', 8.00, 999.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อและลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Senior, Royal Canin Aging 12+', '-'),
(34, 'แมว', 'ใหญ่', 'เมีย', 8.00, 999.00, 7, 999, 'ควรเลือกอาหารที่มีส่วนผสมช่วยเสริมข้อต่อและลดแคลอรี่\nสารอาหาร: โปรตีน 18-22%, ไขมัน 8-12%', 'Hill\'s Science Diet Senior, Royal Canin Aging 12+', '-');

-- --------------------------------------------------------

--
-- Table structure for table `pet`
--

CREATE TABLE `pet` (
  `pet_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pet_name` varchar(100) NOT NULL,
  `pet_type` varchar(100) NOT NULL,
  `pet_gene` varchar(100) NOT NULL,
  `pet_gender` enum('ผู้','เมีย') NOT NULL,
  `pet_weight` float NOT NULL,
  `pet_birthdate` date NOT NULL,
  `pet_description` text DEFAULT NULL,
  `pet_photo` longtext NOT NULL,
  `pet_disease` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_firstname` varchar(100) NOT NULL,
  `user_lastname` varchar(100) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_record`
--

CREATE TABLE `vaccine_record` (
  `vaccine_id` int(11) NOT NULL,
  `pet_id` int(11) NOT NULL,
  `vaccine_name` varchar(100) NOT NULL,
  `vaccine_date` date NOT NULL,
  `vaccine_exp` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `health_record`
--
ALTER TABLE `health_record`
  ADD PRIMARY KEY (`health_id`),
  ADD KEY `pet_id` (`pet_id`);

--
-- Indexes for table `nutrition_guide`
--
ALTER TABLE `nutrition_guide`
  ADD PRIMARY KEY (`guide_id`);

--
-- Indexes for table `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`pet_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD UNIQUE KEY `user_username` (`user_username`),
  ADD UNIQUE KEY `user_phone` (`user_phone`);

--
-- Indexes for table `vaccine_record`
--
ALTER TABLE `vaccine_record`
  ADD PRIMARY KEY (`vaccine_id`),
  ADD KEY `pet_id` (`pet_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `health_record`
--
ALTER TABLE `health_record`
  MODIFY `health_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nutrition_guide`
--
ALTER TABLE `nutrition_guide`
  MODIFY `guide_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `pet`
--
ALTER TABLE `pet`
  MODIFY `pet_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vaccine_record`
--
ALTER TABLE `vaccine_record`
  MODIFY `vaccine_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `health_record`
--
ALTER TABLE `health_record`
  ADD CONSTRAINT `health_record_ibfk_1` FOREIGN KEY (`pet_id`) REFERENCES `pet` (`pet_id`);

--
-- Constraints for table `pet`
--
ALTER TABLE `pet`
  ADD CONSTRAINT `pet_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `vaccine_record`
--
ALTER TABLE `vaccine_record`
  ADD CONSTRAINT `vaccine_record_ibfk_1` FOREIGN KEY (`pet_id`) REFERENCES `pet` (`pet_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
