package Task03.LargestSequenceOfEqualStrings;

import java.util.Scanner;

/**
 * Created by User on 9.4.2016 г..
 */
public class LargestSequenceOfEqualStrings {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputData = console.nextLine().split("\\s");
        StringBuilder result = new StringBuilder();
        String longestSequence = "";

        for (int index = 0; index < inputData.length; index++) {
            if (!inputData[index].equals("\\s")) {
                if (result.length() > 0) {
                    if (inputData[index].equals(inputData[index - 1])) {
                        result.append(" " + inputData[index]);
                    } else if (longestSequence.length() < result.length()) {
                        longestSequence = result.toString();
                        result.setLength(0);
                        result.append(inputData[index]);
                    } else {
                        result.setLength(0);
                        result.append(inputData[index]);
                    }
                } else {
                    result.append(inputData[index]);
                }
            }
        }

        if (longestSequence.length() < result.length()) {
            longestSequence = result.toString();
        }

        System.out.println(longestSequence);
    }
}
