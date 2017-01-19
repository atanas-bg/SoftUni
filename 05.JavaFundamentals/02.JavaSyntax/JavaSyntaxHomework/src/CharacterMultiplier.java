import java.util.Scanner;

/**
 * Created by User on 24.3.2016 г..
 */
public class CharacterMultiplier {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputText = console.nextLine().split("\\s");
        String firstString = inputText[0];
        String secondString = inputText[1];
        String longerPart;
        int sum = 0;

        if (firstString.length() > secondString.length()){
        longerPart = firstString.substring(secondString.length());
            sum += getLongerPartCharactersSum(longerPart, sum);
            int maxIndex = secondString.length();
            sum = multiplyAndSumStringCharacters(firstString, secondString, sum, maxIndex);
        }else if (secondString.length() > firstString.length()){
            longerPart = secondString.substring(firstString.length());
            int maxIndex = firstString.length();
            sum += getLongerPartCharactersSum(longerPart, sum);
            sum = multiplyAndSumStringCharacters(firstString, secondString, sum, maxIndex);
        }else{
            int maxIndex = firstString.length();
            sum = multiplyAndSumStringCharacters(firstString, secondString, sum, maxIndex);
        }

        System.out.println(sum);
    }

    private static int multiplyAndSumStringCharacters(String firstString, String secondString, int sum, int maxIndex) {
        for (int index = 0; index < maxIndex; index++) {
        sum += firstString.charAt(index) * secondString.charAt(index);
        }
        return sum;
    }

    private static int getLongerPartCharactersSum(String longerPart, int sum) {
        for (int index = 0; index < longerPart.length(); index++) {
            sum += longerPart.charAt(index);
        }
        return sum;
    }
}
