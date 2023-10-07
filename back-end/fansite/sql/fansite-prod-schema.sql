DROP DATABASE IF EXISTS fansite;
CREATE DATABASE fansite;
USE fansite;

CREATE TABLE `Group` (
	`group_id` INT NOT NULL AUTO_INCREMENT,
	`group_name` varchar(50) NOT NULL,
	`date_formed` DATE NOT NULL,
	PRIMARY KEY (`group_id`)
);

CREATE TABLE `Idol` (
	`idol_id` INT NOT NULL AUTO_INCREMENT,
	`stage_name` varchar(50) NOT NULL,
	`position` varchar(50) NULL,
	`nationality` varchar(50) NOT NULL,
	`birthday` DATE NOT NULL,
	`height_in_cm` int NOT NULL,
	`mbti_type` varchar(10) NOT NULL,
	`zodiac_sign` varchar(50) NOT NULL,
	`chinese_zodiac_sign` varchar(50) NOT NULL,
    `favorite_color` varchar(50) NOT NULL,
    `group_id` INT NOT NULL,
	PRIMARY KEY (`idol_id`)
);

ALTER TABLE `Idol` ADD CONSTRAINT `fk_Idol_group_id` FOREIGN KEY (`group_id`) REFERENCES `Group`(`group_id`);

-- DATA

INSERT INTO `Group` VALUES
(1, 'NewJeans', '2022-07-22'),
(2, 'TWICE', '2015-10-20'),
(3, 'XG', '2022-03-18'),
(4, 'BIBI', '2019-05-15'),
(5, 'LE SSERAFIM', '2022-05-02'),
(6, 'ITZY', '2019-02-12'),
(7, 'BLACKPINK', '2016-08-08'),
(8, 'Red Velvet', '2014-08-01');

INSERT INTO `Idol` VALUES
(1, 'Minji', 'Rapper', 'Korean', '2004-05-07', 169, 'ESTJ-T', 'Taurus', 'Monkey', 'Yellow', 1),
(2, 'Hanni', 'Vocalist', 'Vietnamese-Australian', '2004-10-06', 162, 'INFP', 'Libra', 'Monkey', 'Pink', 1),
(3, 'Danielle', NULL, 'Korean-Australian', '2005-04-11', 165, 'ENFP', 'Aries', 'Rooster', 'Green', 1),
(4, 'Haerin', NULL, 'Korean', '2006-05-15', 165, 'ISTP', 'Taurus', 'Dog', 'White', 1),
(5, 'Hyein', 'Maknae', 'Korean', '2008-04-21', 170, 'INFP', 'Taurus', 'Rat', 'Light Blue', 1);