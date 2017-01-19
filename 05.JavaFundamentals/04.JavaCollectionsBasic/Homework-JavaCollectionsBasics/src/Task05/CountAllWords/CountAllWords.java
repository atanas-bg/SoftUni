package Task05.CountAllWords;

import java.util.Scanner;

/**
 * Created by User on 10.4.2016 г..
 */
public class CountAllWords {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String line;
        int wordsCount = 0;

        while ((line = console.nextLine()) != null) {
            for (int index = 0; index < line.length(); index++) {
                if (!Character.isLetter(line.charAt(index))) {
                    if (index != 0 && Character.isLetter(line.charAt(index - 1))) {
                        wordsCount++;
                    }
                }
            }

            if (Character.isLetter(line.charAt(line.length() - 1))) {
                wordsCount++;
            }

            System.out.println(wordsCount);
        }
    }
}
