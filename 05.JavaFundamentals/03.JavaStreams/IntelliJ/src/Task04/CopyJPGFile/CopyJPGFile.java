package Task04.CopyJPGFile;

import java.io.*;

/**
 * Created by User on 30.3.2016 г..
 */
public class CopyJPGFile {
    public static void main(String[] args) {
        File file = new File("resources/picture.jpg");
        byte[] buffer = new byte[(int) file.length()];

        try (
                BufferedInputStream reader = new BufferedInputStream(new FileInputStream(file));
                BufferedOutputStream writer = new BufferedOutputStream(new FileOutputStream("resources/my-copied-picture.jpg"))
        ) {
            reader.read(buffer);
            writer.write(buffer);
        } catch (IOException ioe) {
            System.out.println(ioe);
        }
    }
}
