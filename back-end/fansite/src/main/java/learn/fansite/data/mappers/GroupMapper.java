package learn.fansite.data.mappers;

import learn.fansite.models.Group;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GroupMapper implements RowMapper<Group> {

    @Override
    public Group mapRow(ResultSet rs, int rowNum) throws SQLException {
        Group group = new Group();
        group.setId(rs.getInt("group_id"));
        group.setGroupName(rs.getString("group_name"));
        group.setDateFormed(rs.getDate("date_formed").toLocalDate());
        return group;
    }
}
