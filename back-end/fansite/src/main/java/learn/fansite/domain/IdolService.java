package learn.fansite.domain;

import learn.fansite.data.interfaces.IdolRepository;
import learn.fansite.models.Idol;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdolService {

    private final IdolRepository repository;

    public IdolService(IdolRepository repository) {
        this.repository = repository;
    }

    public List<Idol> findAll() {
        return repository.findAll();
    }

    public Idol findById(int id) {
        return repository.findById(id);
    }
}
