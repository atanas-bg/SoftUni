package Task02.AllCapitals;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 28.3.2016 г..
 */
public class AllCapitals {
    public static void main(String[] args) throws IOException {
        List<String> allLines = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader("resources/lines.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                allLines.add(line.toUpperCase());
            }
        }

        try (PrintWriter writer = new PrintWriter(new BufferedWriter(new FileWriter("resources/lines.txt")))) {
            for (String line : allLines) {
                writer.println(line);
            }
        }
    }
}
