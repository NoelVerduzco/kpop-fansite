USE fansite;

-- GROUP
SELECT *
FROM `Group`;

-- findAll
SELECT group_id, group_name, date_formed
FROM `Group`;

-- findById
SELECT group_id, group_name, date_formed
FROM `Group`
WHERE group_id = 1;

-- IDOL
SELECT *
FROM `Idol`;

-- findAll
SELECT idol_id, stage_name, position, nationality, birthday, height_in_cm, mbti_type, zodiac_sign, chinese_zodiac_sign, favorite_color, group_id
FROM `Idol`;

-- findById
SELECT idol_id, stage_name, position, nationality, birthday, height_in_cm, mbti_type, zodiac_sign, chinese_zodiac_sign, favorite_color, group_id
FROM `Idol`
WHERE idol_id = 4;