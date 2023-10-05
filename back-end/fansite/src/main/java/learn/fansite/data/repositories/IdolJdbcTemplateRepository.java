package learn.fansite.data.repositories;

import learn.fansite.data.interfaces.IdolRepository;
import learn.fansite.data.mappers.IdolMapper;
import learn.fansite.models.Idol;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class IdolJdbcTemplateRepository implements IdolRepository {

    private final JdbcTemplate jdbcTemplate;

    public IdolJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Idol> findAll() {

        final String sql = "SELECT idol_id, stage_name, position, nationality, birthday, height_in_cm, mbti_type, zodiac_sign, chinese_zodiac_sign, favorite_color, group_id "
                + "FROM `Idol`;";

        return jdbcTemplate.query(sql, new IdolMapper());
    }

    @Override
    public Idol findById(int id) {

        final String sql = "SELECT idol_id, stage_name, position, nationality, birthday, height_in_cm, mbti_type, zodiac_sign, chinese_zodiac_sign, favorite_color, group_id "
                + "FROM `Idol` "
                + "WHERE idol_id = ?;";

        return jdbcTemplate.query(sql, new IdolMapper(), id)
                .stream()
                .findFirst().orElse(null);
    }
}
