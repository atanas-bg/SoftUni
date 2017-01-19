package Task01.SumLines;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 * @author User
 */
public class SumLines {

    public static void main(String[] args) throws IOException {
        File file = new File("lines.txt");
        FileWriter writer = new FileWriter(file);
        BufferedWriter bw = null;
        String lineEnd = System.lineSeparator();
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            bw = new BufferedWriter(writer);

            //First solution to write the text
            String textToBeWritten =
                    "Kvo staa?" + lineEnd +
                            "Nishto, ti?" + lineEnd +
                            "Chuk, maina." + lineEnd;
            bw.write(textToBeWritten);

            //Second Solution to write the text
//            bw.write("Kvo staa?");
//            bw.newLine();
//            bw.write("Nishto, ti?");
//            bw.newLine();
//            bw.write("Chuk, maina.");
//            bw.newLine();

        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        } finally {
            try {
                if (bw != null) {
                    bw.close();
                }
            } catch (Exception ex) {
                System.out.println("Error in closing the BufferedWriter" + ex);
            }
        }

        FileReader reader = null;
        BufferedReader br = null;
        int sum = 0;

        try {
            reader = new FileReader(file);
            br = new BufferedReader(reader);
            String line = br.readLine();

            while (line != null) {
                for (int index = 0; index < line.length(); index++) {
                    sum += line.charAt(index);
                }
                System.out.println(sum);
                line = br.readLine();
                sum = 0;
            }
        } catch (IOException ex) {
            ex.getMessage();
        } finally {
            try {
                if (br != null) {
                    br.close();
                }
            } catch (IOException ex) {
                ex.getMessage();
            }

        }
    }

}
