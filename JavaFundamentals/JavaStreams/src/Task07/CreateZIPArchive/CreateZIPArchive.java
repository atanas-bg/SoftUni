package Task07.CreateZIPArchive;

import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * Created by User on 30.3.2016 г..
 */
public class CreateZIPArchive {
    public static void main(String[] args) {
        File[] files = new File[]{
                new File("resources/words.txt"),
                new File("resources/count-chars.txt"),
                new File("resources/lines.txt")
        };

        File zipFileName = new File("resources/text-files.zip");

        zipFiles(files, zipFileName);
    }

    private static void zipFiles(File[] files, File zipFileName) {
        try (
                ZipOutputStream zipOut = new ZipOutputStream(new BufferedOutputStream(new FileOutputStream(zipFileName)));
        ) {
            int bufferSize = 4096;
            byte[] buffer = new byte[bufferSize];

            for (int index = 0; index < files.length; index++) {
                try (
                        BufferedInputStream reader = new BufferedInputStream(new FileInputStream(files[index]))
                ) {
                    ZipEntry entry = new ZipEntry(files[index].getName());
                    zipOut.putNextEntry(entry);
                    int count;
                    while ((count = reader.read(buffer, 0, bufferSize)) != -1) {
                        zipOut.write(buffer, 0, count);
                    }
                    reader.close();
                } catch (FileNotFoundException fnfe) {
                    System.out.println(fnfe);
                } catch (IOException ioe) {
                    System.out.println(ioe);
                }
            }
            zipOut.close();
        } catch (FileNotFoundException fnfe) {
            System.out.println(fnfe);
        } catch (IOException ioe) {
            System.out.println(ioe);
        }
    }
}
