package Task02.CountSubstringOccurences;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 23.4.2016 г..
 */
public class CountSubstringOccurences {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String input = console.nextLine().toLowerCase();
        String searchedWord = console.nextLine().toLowerCase();
        String regex = searchedWord;
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);
        int counter = 0;

        for (int index = 0; index < input.length(); index++) {
            if (matcher.find(index)) {
                counter += 1;
                index = matcher.start();
            }
        }

        System.out.println(counter);
    }
}
