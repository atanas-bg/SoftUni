package Task05.SaveAnArrayListOfDoubles;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by User on 30.3.2016 г..
 */
public class SaveAnArrayListOfDoubles {
    public static void main(String[] args) {
        List<Double> doubles = new ArrayList<>(Arrays.asList(12.45, 74.47, 65.78, 52.29));

        try (
                ObjectOutputStream writer = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream("resources/doubles.txt")));
        ) {
            writer.writeObject(doubles);
        } catch (FileNotFoundException fnfe) {
            System.out.println("File not found: " + fnfe);
        } catch (IOException ioe) {
            System.out.println("Error during writing a file: " + ioe);
        }

        try (
                ObjectInputStream reader = new ObjectInputStream(new BufferedInputStream(new FileInputStream("resources/doubles.txt")))
        ) {
            List<Double> output = (List<Double>) reader.readObject();
            for (Double number : output) {
                System.out.println(number);
            }
        } catch (FileNotFoundException fnfe) {
            System.out.println("File not found: " + fnfe);
        } catch (IOException ioe) {
            System.out.println("Error during reading a file: " + ioe);
        } catch (ClassNotFoundException cnfe) {
            System.out.println("Class not found exception: " + cnfe);
        }
    }
}
