package Task01.MelrahShake;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 23.4.2016 г..
 */
public class MelrahShake {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String inputData = console.nextLine();
        String inputPattern = console.nextLine();

        StringBuilder data = new StringBuilder(inputData);
        StringBuilder regex = new StringBuilder(inputPattern);
        Pattern pattern = Pattern.compile(Pattern.quote(inputPattern));
        Matcher matcher = pattern.matcher(inputData);
        while (matcher.find()) {
            int firstMatchStartIndex = matcher.start();
            int lastMatchStartIndex = data.lastIndexOf(regex.toString());

            if (regex.length() > 0 && data.length() > 0 && firstMatchStartIndex < lastMatchStartIndex) {
                data = data.delete(lastMatchStartIndex, lastMatchStartIndex + regex.length());
                data = data.delete(firstMatchStartIndex, firstMatchStartIndex + regex.length());
                int removalIndex = regex.length() / 2;
                regex = regex.deleteCharAt(removalIndex);
                if (regex.length() > 0 && data.length() > 0) {
                    pattern = Pattern.compile(Pattern.quote(regex.toString()));
                    matcher = pattern.matcher(data.toString());
                }
                System.out.println("Shaked it.");
            } else {
                break;
            }
        }


        System.out.println("No shake.");
        System.out.println(data.toString());

    }
}
