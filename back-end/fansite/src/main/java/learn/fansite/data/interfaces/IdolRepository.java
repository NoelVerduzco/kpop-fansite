package learn.fansite.data.interfaces;

import learn.fansite.models.Idol;

import java.util.List;

public interface IdolRepository {

    List<Idol> findAll();

    Idol findById(int id);
}
