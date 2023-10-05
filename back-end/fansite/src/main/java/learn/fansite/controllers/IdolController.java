package learn.fansite.controllers;

import learn.fansite.domain.IdolService;
import learn.fansite.models.Idol;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fansite/kpop/idol")
public class IdolController {
    private final IdolService service;

    public IdolController(IdolService service) {
        this.service = service;
    }

    @GetMapping
    public List<Idol> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Idol> findById(@PathVariable int id) {
        Idol idol = service.findById(id);
        if (idol == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(idol, HttpStatus.OK);
    }
}
