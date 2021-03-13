-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 23, 2018 at 09:49 AM
-- Server version: 5.7.24-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nidara_core`
--

-- --------------------------------------------------------

--
-- Table structure for table `health_camp_qustion`
--

CREATE TABLE `health_camp_qustion` (
  `id` int(11) NOT NULL,
  `grade_id` int(11) NOT NULL,
  `framework_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `heth_cat` int(11) DEFAULT NULL,
  `question_id` int(11) NOT NULL,
  `question` varchar(2000) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `health_camp_qustion`
--

INSERT INTO `health_camp_qustion` (`id`, `grade_id`, `framework_id`, `subject_id`, `heth_cat`, `question_id`, `question`, `created_at`) VALUES
(100, 4, 2, 0, 3, 1, 'Scribbles in circular motion and vertical lines?', '2018-11-23 11:37:00'),
(101, 4, 2, 39, 15, 2, 'Does your child have the concept of time and daily routines?', '2018-11-23 11:37:00'),
(102, 4, 2, 0, 2, 3, 'Can your child catch a ball?', '2018-11-23 11:37:00'),
(103, 4, 2, 0, 2, 4, 'Can your child run up and down 5 times?', '2018-11-23 11:37:00'),
(104, 4, 2, 0, 2, 5, 'Can your child stand on on the left foot and then the right foot, one at a time?', '2018-11-23 11:37:00'),
(105, 4, 2, 0, 2, 6, 'Can your child march back and forth?', '2018-11-23 11:37:00'),
(106, 4, 2, 0, 2, 7, 'Can your child kick the ball in the direction you want?', '2018-11-23 11:37:00'),
(107, 4, 2, 0, 2, 8, 'Can your child walk up and down the stairs without support?', '2018-11-23 11:37:00'),
(108, 4, 2, 0, 2, 9, 'Can your child stand on the left foot without support?', '2018-11-23 11:37:00'),
(109, 4, 2, 0, 11, 10, 'Can your child remember things they learned?', '2018-11-23 11:37:00'),
(110, 4, 1, 1, 15, 11, 'Can your child repeat the word Hi ?', '2018-11-23 11:37:00'),
(111, 4, 1, 1, 15, 12, 'Can your child followthe 2 part insturction - stand up and jump?', '2018-11-23 11:37:00'),
(112, 4, 1, 2, 15, 13, 'Can your child identify the color red?', '2018-11-23 11:37:00'),
(113, 4, 1, 1, 15, 14, 'Does your child use the word Mom or mommy?', '2018-11-23 11:37:00'),
(114, 4, 1, 1, 15, 15, 'Does your child show interest in reading or listening to stories?', '2018-11-23 11:37:00'),
(115, 4, 1, 3, 15, 16, 'Can your child begin to identify animals like cat and dog?', '2018-11-23 11:37:00'),
(116, 4, 1, 1, 15, 17, 'Can your child say Dad or daddy?', '2018-11-23 11:37:00'),
(117, 4, 1, 10, 15, 18, 'Opens door by turning knob', '2018-11-23 11:37:00'),
(118, 4, 1, 10, 15, 19, 'Feeds himself with little mess', '2018-11-23 11:37:00'),
(119, 4, 1, 2, 15, 20, 'Can your child count number 1', '2018-11-23 11:37:00'),
(120, 4, 3, 0, 15, 21, 'Verbal Linguistic Domain\r\nDoes your child play with words and use language effectively; includes listening and reading. ', '2018-11-23 11:37:00'),
(121, 4, 3, 0, 15, 22, 'Mathematical & Logical Domain\r\nDoes your child use logic and reasoning to calculate and solve problems?', '2018-11-23 11:37:00'),
(122, 4, 3, 0, 15, 23, 'Visual and Spatial Domain\r\nDoes your child visualize things and understand spaces and directions ?', '2018-11-23 11:37:00'),
(123, 4, 3, 0, 15, 24, 'Bodily and Kinesthetic Domain\r\nDoes your child learn through bodily movements?', '2018-11-23 11:37:00'),
(124, 4, 3, 0, 15, 25, 'Interpersonal Domain\r\nDoes your child connect to other children and  people, making it easy to work in a group ?', '2018-11-23 11:37:00'),
(125, 4, 3, 0, 15, 26, 'Intrapersonal Comptence\r\nDoes your child show that they are progressivelively understanding themselves better ?', '2018-11-23 11:37:00'),
(126, 4, 3, 0, 15, 27, 'Musical Domain\r\nDoes your child prefer using music and lyrics to learn concepts ?', '2018-11-23 11:37:00'),
(127, 4, 3, 0, 15, 28, 'Naturalistic Domain\r\nDoes your child like nature and cares for their surroundings ?', '2018-11-23 11:37:00'),
(128, 4, 3, 0, 15, 29, 'Existential Domain\r\nDoes your child like to see the big picture and know more about the world we live in ?', '2018-11-23 11:37:00'),
(131, 1, 2, 0, 2, 1, 'Can your child stand on on the left foot and then the right foot, one at a time?', '2018-11-23 11:37:00'),
(132, 1, 2, 39, 15, 2, 'Does your child have the concept of time and daily routines?', '2018-11-23 11:37:00'),
(133, 1, 2, 0, 2, 3, 'Can your child kick a ball in the direction required?', '2018-11-23 11:37:00'),
(134, 1, 2, 0, 2, 4, 'Can your child hop on the left foot and then the right foot?', '2018-11-23 11:37:00'),
(135, 1, 2, 0, 3, 5, 'Can your child trace within trace lines?', '2018-11-23 11:37:00'),
(136, 1, 2, 0, 2, 6, 'Can your child walk up and down the stairs without support?', '2018-11-23 11:37:00'),
(137, 1, 2, 0, 11, 7, 'Can your child recall things taught to them?', '2018-11-23 11:37:00'),
(138, 1, 2, 0, 2, 8, 'Can your child stand on tip-toes for about a second without holding anything ?', '2018-11-23 11:37:00'),
(139, 1, 2, 0, 2, 9, 'Can your child ride a tricycle ?', '2018-11-23 11:37:00'),
(140, 1, 2, 0, 11, 10, 'Can your child sustain attention for 10 seconds?', '2018-11-23 11:37:00'),
(141, 1, 1, 2, 15, 11, 'Can your child count from 1 to 10?', '2018-11-23 11:37:00'),
(142, 1, 1, 3, 15, 12, 'Can your child identify parts of the body?', '2018-11-23 11:37:00'),
(143, 1, 1, 1, 15, 13, 'Can your child speak in two or three word sentences and progresses to four to five word sentences ?', '2018-11-23 11:37:00'),
(144, 1, 1, 3, 15, 14, 'Can your child distinguish between earth and space science concepts?', '2018-11-23 11:37:00'),
(145, 1, 1, 1, 15, 15, 'Does your child carry out instructions you say out loud - like sit on the counch?', '2018-11-23 11:37:00'),
(146, 1, 1, 1, 15, 16, 'When you point to a picture, can your child state what action is taking place?', '2018-11-23 11:37:00'),
(147, 1, 1, 1, 15, 17, 'Can your child say their full name and age?', '2018-11-23 11:37:00'),
(148, 1, 1, 3, 15, 18, 'Can your child idnetify different habitats?', '2018-11-23 11:37:00'),
(149, 1, 1, 4, 15, 19, 'Can your child name various countries?', '2018-11-23 11:37:00'),
(150, 1, 1, 3, 15, 20, 'Can your child talk about weather in different parts of the world?', '2018-11-23 11:37:00'),
(151, 1, 3, 0, 15, 21, 'Verbal Linguistic Domain\r\nDoes your child play with words and use language effectively; includes listening and reading. ', '2018-11-23 11:37:00'),
(152, 1, 3, 0, 15, 22, 'Mathematical & Logical Domain\r\nDoes your child use logic and reasoning to calculate and solve problems?', '2018-11-23 11:37:00'),
(153, 1, 3, 0, 15, 23, 'Visual and Spatial Domain\r\nDoes your child visualize things and understand spaces and directions ?', '2018-11-23 11:37:00'),
(154, 1, 3, 0, 15, 24, 'Bodily and Kinesthetic Domain\r\nDoes your child learn through bodily movements?', '2018-11-23 11:37:00'),
(155, 1, 3, 0, 15, 25, 'Interpersonal Domain\r\nDoes your child connect to other children and  people, making it easy to work in a group ?', '2018-11-23 11:37:00'),
(156, 1, 3, 0, 15, 26, 'Intrapersonal Comptence\r\nDoes your child show that they are progressivelively understanding themselves better ?', '2018-11-23 11:37:00'),
(157, 1, 3, 0, 15, 27, 'Musical Domain\r\nDoes your child prefer using music and lyrics to learn concepts ?', '2018-11-23 11:37:00'),
(158, 1, 3, 0, 15, 28, 'Naturalistic Domain\r\nDoes your child like nature and cares for their surroundings ?', '2018-11-23 11:37:00'),
(159, 1, 3, 0, 15, 29, 'Existential Domain\r\nDoes your child like to see the big picture and know more about the world we live in ?', '2018-11-23 11:37:00'),
(161, 2, 2, 0, 2, 1, 'Can your child stand on on the left foot and then the right foot, one at a time?', '2018-11-23 11:37:00'),
(162, 2, 2, 39, 15, 2, 'Does your child have the concept of time and daily routines?', '2018-11-23 11:37:00'),
(163, 2, 2, 0, 2, 3, 'Can your child kick a ball in the direction required?', '2018-11-23 11:37:00'),
(164, 2, 2, 0, 2, 4, 'Can your child hop on the left foot and then the right foot?', '2018-11-23 11:37:00'),
(165, 2, 2, 0, 3, 5, 'Can your child trace within trace lines?', '2018-11-23 11:37:00'),
(166, 2, 2, 0, 2, 6, 'Can your child walk up and down the stairs without support?', '2018-11-23 11:37:00'),
(167, 2, 2, 0, 11, 7, 'Can your child recall things taught to them?', '2018-11-23 11:37:00'),
(168, 2, 2, 0, 2, 8, 'Can your child stand on tip-toes for about a second without holding anything ?', '2018-11-23 11:37:00'),
(169, 2, 2, 0, 2, 9, 'Can your child ride a tricycle ?', '2018-11-23 11:37:00'),
(170, 2, 2, 0, 11, 10, 'Can your child sustain attention for 20 seconds?', '2018-11-23 11:37:00'),
(171, 2, 1, 2, 15, 11, 'Can your child count from 1 to 20?', '2018-11-23 11:37:00'),
(172, 2, 1, 3, 15, 12, 'Can your child name various fruits and animals?', '2018-11-23 11:37:00'),
(173, 2, 1, 2, 15, 13, 'Can your child describe common things around the house with big/ small, fat/thin', '2018-11-23 11:37:00'),
(174, 2, 1, 1, 15, 14, 'Does your child use words with past and present tense? Like eating, ran?', '2018-11-23 11:37:00'),
(175, 2, 1, 2, 15, 15, 'Can your child group things?', '2018-11-23 11:37:00'),
(176, 2, 1, 3, 15, 16, 'Can your child talk about weather patterns in different parts of the world?', '2018-11-23 11:37:00'),
(177, 2, 1, 3, 15, 17, 'Can your child talk about animal habitats around the world?', '2018-11-23 11:37:00'),
(178, 2, 1, 4, 15, 18, 'Can your child talk about similaries and differences with children around the world?', '2018-11-23 11:37:00'),
(179, 2, 1, 1, 15, 19, 'Does your child talk like other children the same age?', '2018-11-23 11:37:00'),
(180, 2, 1, 3, 15, 20, 'Can your child name colors and living things?', '2018-11-23 11:37:00'),
(181, 2, 3, 0, 15, 21, 'Verbal Linguistic Domain\r\nDoes your child play with words and use language effectively; includes listening and reading. ', '2018-11-23 11:37:00'),
(182, 2, 3, 0, 15, 22, 'Mathematical & Logical Domain\r\nDoes your child use logic and reasoning to calculate and solve problems?', '2018-11-23 11:37:00'),
(183, 2, 3, 0, 15, 23, 'Visual and Spatial Domain\r\nDoes your child visualize things and understand spaces and directions ?', '2018-11-23 11:37:00'),
(184, 2, 3, 0, 15, 24, 'Bodily and Kinesthetic Domain\r\nDoes your child learn through bodily movements?', '2018-11-23 11:37:00'),
(185, 2, 3, 0, 15, 25, 'Interpersonal Domain\r\nDoes your child connect to other children and  people, making it easy to work in a group ?', '2018-11-23 11:37:00'),
(186, 2, 3, 0, 15, 26, 'Intrapersonal Comptence\r\nDoes your child show that they are progressivelively understanding themselves better ?', '2018-11-23 11:37:00'),
(187, 2, 3, 0, 15, 27, 'Musical Domain\r\nDoes your child prefer using music and lyrics to learn concepts ?', '2018-11-23 11:37:00'),
(188, 2, 3, 0, 15, 28, 'Naturalistic Domain\r\nDoes your child like nature and cares for their surroundings ?', '2018-11-23 11:37:00'),
(189, 2, 3, 0, 15, 29, 'Existential Domain\r\nDoes your child like to see the big picture and know more about the world we live in ?', '2018-11-23 11:37:00'),
(191, 3, 2, 0, 2, 1, 'Can your child stand on on the left foot and then the right foot, one at a time?', '2018-11-23 11:37:00'),
(192, 3, 2, 39, 15, 2, 'Does your child have the concept of time and daily routines?', '2018-11-23 11:37:00'),
(193, 3, 2, 0, 2, 3, 'Can your child kick a ball in the direction required?', '2018-11-23 11:37:00'),
(194, 3, 2, 0, 2, 4, 'Can your child hop on the left foot and then the right foot', '2018-11-23 11:37:00'),
(195, 3, 2, 0, 3, 5, 'Can your child trace within lines?', '2018-11-23 11:37:00'),
(196, 3, 2, 0, 3, 6, 'Can your child cut with child friendly scissors?', '2018-11-23 11:37:00'),
(197, 3, 2, 0, 11, 7, 'Can your child recall things taught to them?', '2018-11-23 11:37:00'),
(198, 3, 2, 0, 2, 8, 'Can your child stand on tip-toes for about a second without holding anything ?', '2018-11-23 11:37:00'),
(199, 3, 2, 0, 2, 9, 'Can your child ride a tricycle ?', '2018-11-23 11:37:00'),
(200, 3, 2, 0, 11, 10, 'Can your child sustain attention for 30 seconds?', '2018-11-23 11:37:00'),
(201, 3, 2, 0, 11, 11, 'Can your child solve age appropriate puzzles?', '2018-11-23 11:37:00'),
(202, 3, 1, 2, 15, 12, 'Can your child count from 1 to 100 ?', '2018-11-23 11:37:00'),
(203, 3, 1, 1, 15, 13, 'Can your child speak in full 5-6 word sentences?', '2018-11-23 11:37:00'),
(204, 3, 1, 1, 15, 14, 'When talking about something that has already happened, does your child talk in the past tense? For example, walked, jumped', '2018-11-23 11:37:00'),
(205, 3, 1, 3, 15, 15, 'Can your child talk about animal habitats around the world?', '2018-11-23 11:37:00'),
(206, 3, 1, 4, 15, 16, 'Can your child talk about similaries and differences with children around the world?', '2018-11-23 11:37:00'),
(207, 3, 1, 4, 15, 17, 'Can your child talk about events that happened in the past? Example - when I was a baby .. ', '2018-11-23 11:37:00'),
(208, 3, 1, 3, 15, 18, 'Can your child match mother and baby animas?', '2018-11-23 11:37:00'),
(209, 3, 1, 2, 15, 19, 'Does your child have the ability to compare two or more objects? For example, this is bigger  or smaller.', '2018-11-23 11:37:00'),
(210, 3, 1, 1, 15, 20, 'Can your child answer questions about their daily activities? For example,what did you eat for breakfast?', '2018-11-23 11:37:00'),
(211, 3, 1, 1, 15, 21, 'Can your child repeat phrases you tell them?', '2018-11-23 11:37:00'),
(212, 3, 3, 0, 15, 22, 'Verbal Linguistic Domain\r\nDoes your child play with words and use language effectively; includes listening and reading. ', '2018-11-23 11:37:00'),
(213, 3, 3, 0, 15, 23, 'Mathematical & Logical Domain\r\nDoes your child use logic and reasoning to calculate and solve problems?', '2018-11-23 11:37:00'),
(214, 3, 3, 0, 15, 24, 'Visual and Spatial Domain\r\nDoes your child visualize things and understand spaces and directions ?', '2018-11-23 11:37:00'),
(215, 3, 3, 0, 15, 25, 'Bodily and Kinesthetic Domain\r\nDoes your child learn through bodily movements?', '2018-11-23 11:37:00'),
(216, 3, 3, 0, 15, 26, 'Interpersonal Domain\r\nDoes your child connect to other children and  people, making it easy to work in a group ?', '2018-11-23 11:37:00'),
(217, 3, 3, 0, 15, 27, 'Intrapersonal Comptence\r\nDoes your child show that they are progressivelively understanding themselves better ?', '2018-11-23 11:37:00'),
(218, 3, 3, 0, 15, 28, 'Musical Domain\r\nDoes your child prefer using music and lyrics to learn concepts ?', '2018-11-23 11:37:00'),
(219, 3, 3, 0, 15, 29, 'Naturalistic Domain\r\nDoes your child like nature and cares for their surroundings ?', '2018-11-23 11:37:00'),
(220, 3, 3, 0, 15, 30, 'Existential Domain\r\nDoes your child like to see the big picture and know more about the world we live in ?', '2018-11-23 11:37:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `health_camp_qustion`
--
ALTER TABLE `health_camp_qustion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_health_camp_qustion_grade_idx` (`grade_id`),
  ADD KEY `fk_health_camp_qustion_framework_idx` (`framework_id`),
  ADD KEY `fk_health_camp_qustion_subject_idx` (`subject_id`),
  ADD KEY `fk_health_camp_qustion_heth_cat` (`heth_cat`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `health_camp_qustion`
--
ALTER TABLE `health_camp_qustion`
  ADD CONSTRAINT `fk_health_camp_qustion_framework` FOREIGN KEY (`framework_id`) REFERENCES `core_frameworks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_health_camp_qustion_grade` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_health_camp_qustion_heth_cat` FOREIGN KEY (`heth_cat`) REFERENCES `health_camp_cat` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_health_camp_qustion_subject` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
