package learn.fansite.data.interfaces;

import learn.fansite.models.Group;

import java.util.List;

public interface GroupRepository {

    List<Group> findAll();

    Group findById(int id);
}
