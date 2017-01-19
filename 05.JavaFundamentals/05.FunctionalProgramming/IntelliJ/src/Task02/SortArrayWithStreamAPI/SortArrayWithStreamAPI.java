package Task02.SortArrayWithStreamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by User on 20.4.2016 г..
 */
public class SortArrayWithStreamAPI {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] input = console.nextLine().split("\\s+");
        int[] numbers = new int[input.length];

        for (int index = 0; index < input.length; index++) {
            numbers[index] = Integer.parseInt(input[index]);
        }

        String command = console.nextLine();
        int[] sortedNumbers = new int[numbers.length];

        if (command.equals("Ascending")) {
            sortedNumbers = Arrays.stream(numbers).sorted().toArray();
        } else if (command.equals("Descending")) {
            // It can be used also -> sorted(Comparator.reverseOrder())
            sortedNumbers = Arrays.stream(numbers).boxed().sorted((x, y) -> y.compareTo(x)).mapToInt(num -> num).toArray();
        }

        System.out.print(sortedNumbers[0]);
        for (int index = 1; index < sortedNumbers.length; index++) {
            System.out.print(" " + sortedNumbers[index]);
        }
    }
}

