package learn.fansite.data.mappers;

import learn.fansite.models.Idol;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IdolMapper implements RowMapper<Idol> {

    @Override
    public Idol mapRow(ResultSet rs, int rowNum) throws SQLException {
        Idol idol = new Idol();
        idol.setId(rs.getInt("idol_id"));
        idol.setStageName(rs.getString("stage_name"));
        idol.setPosition(rs.getString("position"));
        idol.setNationality(rs.getString("nationality"));
        idol.setBirthday(rs.getDate("birthday").toLocalDate());
        idol.setHeightInCm(rs.getInt("height_in_cm"));
        idol.setMbtiType(rs.getString("mbti_type"));
        idol.setZodiacSign(rs.getString("zodiac_sign"));
        idol.setChineseZodiacSign(rs.getString("chinese_zodiac_sign"));
        idol.setFavoriteColor(rs.getString("favorite_color"));
        idol.setGroupId(rs.getInt("group_id"));
        return idol;
    }
}
