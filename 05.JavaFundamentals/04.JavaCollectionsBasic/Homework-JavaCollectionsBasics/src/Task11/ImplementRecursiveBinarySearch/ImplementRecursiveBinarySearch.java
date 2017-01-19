package Task11.ImplementRecursiveBinarySearch;

import java.util.Arrays;
import java.util.Scanner;

/**
 * Created by User on 12.4.2016 г..
 */
public class ImplementRecursiveBinarySearch {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int searchedNumber = console.nextInt();
        console.nextLine();
        String[] numbersAsStrings = console.nextLine().split("\\s");
        int[] numbers = new int[numbersAsStrings.length];

        for (int index = 0; index < numbersAsStrings.length; index++) {
            numbers[index] = Integer.parseInt(numbersAsStrings[index]);
        }

        Arrays.sort(numbers);

        int indexOfNumber = indexOf(numbers, searchedNumber);
        System.out.println(indexOfNumber);
    }

    private static int indexOf(int[] numbers, int searchedNumber) {
        int startIndex = 0;
        int endIndex = numbers.length - 1;
        int middleIndex = 0;
        while (startIndex <= endIndex) {
            middleIndex = startIndex + (endIndex - startIndex) / 2; // it is very important NOT to use (startIndex + endIndex)/2 - it could cause overflow exception
            if (searchedNumber < numbers[middleIndex]) {
                endIndex = middleIndex - 1;
            } else if (searchedNumber > numbers[middleIndex]) {
                startIndex = middleIndex + 1;
            } else {
                // This cycle finds the first index of the searched number in the array
                while (middleIndex >= 1 && (numbers[middleIndex] == numbers[middleIndex - 1])) {
                    middleIndex = middleIndex - 1;
                }

                return middleIndex;
            }
        }

        return -1;
    }
}
