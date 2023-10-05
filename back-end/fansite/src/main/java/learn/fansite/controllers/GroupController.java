package learn.fansite.controllers;

import learn.fansite.domain.GroupService;
import learn.fansite.models.Group;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fansite/kpop/group")
public class GroupController {
    private final GroupService service;

    public GroupController(GroupService service) {
        this.service = service;
    }

    @GetMapping
    public List<Group> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Group> findById(@PathVariable int id) {
        Group group = service.findById(id);
        if (group == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(group, HttpStatus.OK);
    }
}
