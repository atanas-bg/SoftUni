package Task08.ExtractAllUniqueWords;

import java.util.Scanner;
import java.util.TreeSet;

/**
 * Created by User on 12.4.2016 г..
 */
public class ExtractAllUniqueWords {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputWords = console.nextLine().toLowerCase().split("[^\\w]+");
        TreeSet<String> uniqueWordsInAlphabeticalOrder = new TreeSet<>();

        for (String word : inputWords) {
            uniqueWordsInAlphabeticalOrder.add(word);
        }

        String output = String.join(" ", uniqueWordsInAlphabeticalOrder);
        System.out.println(output);
    }
}
