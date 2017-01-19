package Task02.SequencesOfEqualStrings;

import java.util.Scanner;

/**
 * Created by User on 9.4.2016 г..
 */
public class SequencesOfEqualStrings {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputData = console.nextLine().split("\\s");
        StringBuilder result = new StringBuilder();
        if(!inputData[0].equals("\\s")){
            result.append(inputData[0]);
        }

        for (int index = 1; index < inputData.length; index++) {
            if(!inputData[index].equals("\\s")) {
                if (inputData[index].equals(inputData[index - 1])) {
                    result.append(" " + inputData[index]);
                } else {
                    result.append("\n" + inputData[index]);
                }
            }
        }

        System.out.println(result.toString());
    }
}
