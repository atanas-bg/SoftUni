package Task01.ExtractEmails;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 23.4.2016 г..
 */
public class ExtractEmails {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String input = console.nextLine();
        String regex = "(?:\\s*)([a-zA-Z0-9]+[\\.|\\-|\\_]?[a-zA-Z0-9]+@[a-zA-Z]+[\\-]?[a-zA-Z]+[\\.]?[a-zA-Z]+[\\.][a-zA-Z]+)";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);

        while (matcher.find()){
            System.out.println(matcher.group(1));
        }
    }
}
