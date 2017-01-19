package Task06.CountSpecifiedWord;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Created by User on 12.4.2016 г..
 */
public class CountSpecifiedWord {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String word;
        int wordStartIndex = -1;
        int wordEndIndex = -1;
        List<String> words = new ArrayList<>();

        // It could be used Regex for simple solution -> String[] inputWords = console.nextLine().split("[^\\w]+");
        // The string array "inputWords" could be added to "words" ArrayList

        String line = console.nextLine();
        for (int currentIndex = 0; currentIndex < line.length(); currentIndex++) {
            if (currentIndex != 0) {
                if (!Character.isLetter(line.charAt(currentIndex))) {
                    if (Character.isLetter(line.charAt(currentIndex - 1))) {
                        if (wordStartIndex > wordEndIndex) {
                            wordEndIndex = currentIndex;
                            word = line.substring(wordStartIndex, wordEndIndex).toLowerCase();
                            words.add(word);
                        }
                    }
                    if (currentIndex != (line.length() - 1) && Character.isLetter(line.charAt(currentIndex + 1))) {
                        wordStartIndex = currentIndex + 1;
                    }
                }
            } else if (Character.isLetter(line.charAt(currentIndex))) {
                wordStartIndex = currentIndex;
            } else if (currentIndex != (line.length() - 1) && Character.isLetter(line.charAt(currentIndex + 1))) {
                wordStartIndex = currentIndex + 1;
            }
        }

        String searchedWord = console.nextLine().toLowerCase();
        int wordCount = 0;
        for (int index = 0; index < words.size(); index++) {
            if (words.get(index).equals(searchedWord)) {
                wordCount++;
            }
        }

        System.out.println(wordCount);
    }
}
