package Task06.SaveCustomObjectInFile;

import java.io.Serializable;

/**
 * Created by User on 30.3.2016 г..
 */
public class Course implements Serializable {
    private String name;
    private int studentsCount;

    public Course(String name, int studentsCount) {
        this.setName(name);
        this.setStudentsCount(studentsCount);
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public int getStudentsCount() {
        return studentsCount;
    }

    private void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }
}
