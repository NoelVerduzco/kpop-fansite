package learn.fansite.data.repositories;

import learn.fansite.data.interfaces.GroupRepository;
import learn.fansite.data.mappers.GroupMapper;
import learn.fansite.models.Group;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GroupJdbcTemplateRepository implements GroupRepository {

    private final JdbcTemplate jdbcTemplate;

    public GroupJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Group> findAll() {

        final String sql = "SELECT group_id, group_name, date_formed "
                + "FROM `Group`;";

        return jdbcTemplate.query(sql, new GroupMapper());
    }

    @Override
    public Group findById(int id) {

        final String sql = "SELECT group_id, group_name, date_formed "
                + "FROM `Group` "
                + "WHERE group_id = ?;";

        return jdbcTemplate.query(sql, new GroupMapper(), id)
                .stream()
                .findFirst().orElse(null);
    }
}
