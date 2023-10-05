package learn.fansite.domain;

import learn.fansite.data.interfaces.GroupRepository;
import learn.fansite.models.Group;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    private final GroupRepository repository;

    public GroupService(GroupRepository repository) {
        this.repository = repository;
    }

    public List<Group> findAll() {
        return repository.findAll();
    }

    public Group findById(int id) {
        return repository.findById(id);
    }
}
