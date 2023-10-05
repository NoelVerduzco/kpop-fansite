package learn.fansite.models;

import java.time.LocalDate;
import java.util.Objects;

public class Group {

    private int id;
    private String groupName;
    private LocalDate dateFormed;

    public Group() {

    }

    public Group(int id, String groupName, LocalDate dateFormed) {
        this.id = id;
        this.groupName = groupName;
        this.dateFormed = dateFormed;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public LocalDate getDateFormed() {
        return dateFormed;
    }

    public void setDateFormed(LocalDate dateFormed) {
        this.dateFormed = dateFormed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Group group = (Group) o;
        return id == group.id && Objects.equals(groupName, group.groupName) && Objects.equals(dateFormed, group.dateFormed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, groupName, dateFormed);
    }
}
