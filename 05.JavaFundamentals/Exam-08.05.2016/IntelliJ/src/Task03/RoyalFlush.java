package Task03;

import java.util.HashMap;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 8.5.2016 г..
 */
public class RoyalFlush {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int numLines = Integer.parseInt(console.nextLine());
        String inputLine;
        HashMap<String, String> cards = new HashMap<>();
        StringBuilder allInput = new StringBuilder();

        for (int line = 0; line < numLines; line++) {
            inputLine = console.nextLine();
            allInput.append(inputLine);
        }

//        for (int index = 0; index < allInput.length() - 1; index++) {
//            cards.put(allInput.charAt(index), allInput.charAt(index + 1));
//        }

        String regex = ".*?(10{1}(.)).*?J{1}\\2.*?Q{1}\\2.*?K{1}\\2.*?A{1}\\2.*";
        Pattern pattern = Pattern.compile(regex);

        String suit;
        int royalFlushCounter = 0;
        cards.put("s", "Spades");
        cards.put("c", "Clubs");
        cards.put("d", "Diamonds");
        cards.put("h", "Hearts");
//        String strCards = allInput.toString();
        Matcher matcher = pattern.matcher(allInput);
        while (matcher.find()) {
            suit = matcher.group(2);
            System.out.printf("Royal Flush Found - %s", cards.get(suit));
            System.out.println();
            royalFlushCounter += 1;
            int position = allInput.indexOf(matcher.group(1));
            allInput.delete(position, position + 1);

            matcher = pattern.matcher(allInput);
        }

        System.out.printf("Royal's Royal Flushes - %d.", royalFlushCounter);
    }
}
