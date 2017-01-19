package Task04.LongestIncreasingSequence;

import java.util.Scanner;

/**
 * Created by User on 10.4.2016 г..
 */
public class LongestIncreasingSequence {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputData = console.nextLine().split("\\s");
        int[] numbersArray = new int[inputData.length];

        for (int index = 0; index < inputData.length; index++) {
            numbersArray[index] = Integer.parseInt(inputData[index]);
        }

        StringBuilder currentSequence = new StringBuilder();
        String longestSequence = "";

        for (int index = 0; index < numbersArray.length; index++) {
                if (currentSequence.length() > 0) {
                    if (numbersArray[index] > numbersArray[index - 1]) {
                        currentSequence.append(" " + numbersArray[index]);
                    } else if (longestSequence.length() < currentSequence.length()) {
                        longestSequence = currentSequence.toString();
                        System.out.println(currentSequence.toString());
                        currentSequence.setLength(0);
                        currentSequence.append(numbersArray[index]);

                    } else {
                        System.out.println(currentSequence.toString());
                        currentSequence.setLength(0);
                        currentSequence.append(numbersArray[index]);
                    }
                } else {
                    currentSequence.append(numbersArray[index]);
                }

        }

        if (longestSequence.length() < currentSequence.length()) {
            longestSequence = currentSequence.toString();
        }

        System.out.println(currentSequence.toString());

        System.out.println("Longest:" + longestSequence);
    }
}
