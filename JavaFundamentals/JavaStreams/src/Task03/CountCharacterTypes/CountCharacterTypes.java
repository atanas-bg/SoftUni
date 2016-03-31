package Task03.CountCharacterTypes;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

/**
 * Created by User on 30.3.2016 г..
 */
public class CountCharacterTypes {
    public static void main(String[] args) {
        int vowelsCount = 0;
        int consonantsCount = 0;
        int punctuationMarksCount = 0;

        List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u');

        List<Character> consonants = Arrays.asList('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z');

        List<Character> punctuationMarks = Arrays.asList('!', ',', '.', '?');

        try (
                BufferedReader reader = new BufferedReader(new FileReader("resources/words.txt"))
        ) {
            String line;
            while ((line = reader.readLine()) != null) {
                for (int index = 0; index < line.length(); index++) {
                    char symbol = line.charAt(index);
                    symbol = Character.toLowerCase(symbol);

                    if (consonants.contains(symbol)) {
                        consonantsCount++;
                    } else if (vowels.contains(symbol)) {
                        vowelsCount++;
                    } else if (punctuationMarks.contains(symbol)) {
                        punctuationMarksCount++;
                    }
                }
            }
        } catch (IOException ioex) {
            System.out.println(ioex);
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter("resources/count-chars.txt"))) {
            writer.write("Vowels: " + vowelsCount);
            writer.newLine();
            writer.write("Consonants: " + consonantsCount);
            writer.newLine();
            writer.write("Punctuation: " + punctuationMarksCount);
            writer.newLine();
        } catch (IOException ioex) {
            System.out.println(ioex);
        }
    }

}
