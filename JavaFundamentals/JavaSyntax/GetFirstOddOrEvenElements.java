import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Created by User on 24.3.2016 г..
 */
public class GetFirstOddOrEvenElements {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputString = console.nextLine().split("\\s");
        int[] numbers = new int[inputString.length];

        for (int index = 0; index < inputString.length; index++) {
            numbers[index] = Integer.parseInt(inputString[index]);
        }

        String[] command = console.nextLine().split("\\s");
        int numberOfElements = Integer.parseInt(command[1]);
        String flag = command[2];
        List<Integer> result = new ArrayList<>();
        switch (flag) {
            case "even":
                getNEvenNumbers(numbers, numberOfElements, result);
                break;
            case "odd":
                getNOddNumbers(numbers, numberOfElements, result);
                break;
        }

        System.out.print(result.get(0));
        for (int index = 1; index < result.size(); index++) {
            System.out.print(" " + result.get(index));
        }
    }

    private static void getNEvenNumbers(int[] numbers, int numberOfElements, List<Integer> result) {
        for (int index = 0; index < numbers.length; index++) {
            if (result.size() < numberOfElements) {
                if (numbers[index] % 2 == 0) {
                    result.add(numbers[index]);
                }
            } else {
                break;
            }
        }
    }

    private static void getNOddNumbers(int[] numbers, int numberOfElements, List<Integer> result) {
        for (int index = 0; index < numbers.length; index++) {
            if (result.size() < numberOfElements) {
                if (numbers[index] % 2 != 0) {
                    result.add(numbers[index]);
                }
            } else {
                break;
            }
        }
    }
}
