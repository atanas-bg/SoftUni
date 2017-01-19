package Task06.SaveCustomObjectInFile;

import java.io.*;

/**
 * Created by User on 30.3.2016 г..
 */
public class SaveCustomObjectInFile {
    public static void main(String[] args) {
        Course[] softUni = new Course[]{
                new Course("Java Fundamentals", 200),
                new Course("Advanced C#", 300),
                new Course("Programming Basics", 500)
        };

        try (
                ObjectOutputStream writer = new ObjectOutputStream(new FileOutputStream("resources/course.save"))
        ) {
            writer.writeObject(softUni);
        } catch (FileNotFoundException fnfe) {
            System.out.println("File not found: " + fnfe);
        } catch (IOException ioex) {
            System.out.println("Error occured while writing a file" + ioex);
        }

        try (
                ObjectInputStream reader = new ObjectInputStream(new FileInputStream("resources/course.save"))
        ) {
            Course[] output = (Course[]) reader.readObject();
            for (Course course : output) {
                System.out.printf("Course name: %s, Number of Students: %d", course.getName(), course.getStudentsCount());
                System.out.println();
            }
        } catch (FileNotFoundException fnfe) {
            System.out.println("File not found: " + fnfe);
        } catch (IOException ioex) {
            System.out.println("Error occured while writing a file" + ioex);
        } catch (ClassNotFoundException cnfe) {
            System.out.println("Class not found: " + cnfe);
        }
    }
}
