package Test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 21.4.2016 г..
 */
public class Test {
    public static void main(String[] args) {
        String text = "Hello, my number in Sofia is +359  894 25 33 12, " +
                "but in Munich is +49 25 145-12345.";
        Pattern pattern = Pattern.compile("\\+\\d+[ \\-\\d]+");
        Matcher matcher = pattern.matcher(text);

        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
}
