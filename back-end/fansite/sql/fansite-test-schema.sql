DROP DATABASE IF EXISTS fansite_test;
CREATE DATABASE fansite_test;
USE fansite_test;

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

-- SET KNOWN GOOD STATE

delimiter //
create procedure set_known_good_state()
begin
    delete from `Idol`;
	delete from `Group`;

    alter table `Idol` auto_increment = 1;
    alter table `Group` auto_increment = 1;
    
-- DATA

INSERT INTO `Group` VALUES
(1, 'NewJeans', '2022-07-22');

INSERT INTO `Idol` VALUES
(1, 'Minji', 'Rapper', 'Korean', '2004-05-07', 169, 'ESTJ-T', 'Taurus', 'Monkey', 'Yellow', 1),
(2, 'Hanni', 'Vocalist', 'Vietnamese-Australian', '2004-10-06', 162, 'INFP', 'Libra', 'Monkey', 'Pink', 1),
(3, 'Danielle', NULL, 'Korean-Australian', '2005-04-11', 165, 'ENFP', 'Aries', 'Rooster', 'Green', 1),
(4, 'Haerin', NULL, 'Korean', '2006-05-15', 165, 'ISTP', 'Taurus', 'Dog', 'White', 1),
(5, 'Hyein', 'Maknae', 'Korean', '2008-04-21', 170, 'INFP', 'Taurus', 'Rat', 'Light Blue', 1);

end //
delimiter ;