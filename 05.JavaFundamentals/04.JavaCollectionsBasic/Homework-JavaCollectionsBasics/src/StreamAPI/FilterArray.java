package StreamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * Created by User on 15.4.2016 г..
 */
public class FilterArray {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] input = console.nextLine().split(" ");
        List<Integer> numbers = Arrays.stream(input)
                .filter(FilterArray::isNumber)
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int sumReduce = numbers.stream().reduce((x, y) -> x + y).get();
        int sumMap = numbers.stream().mapToInt(Integer::intValue).sum();
        int sumThirdWay = numbers.stream().collect(Collectors.summingInt(Integer::intValue));
        System.out.println(sumReduce);
        System.out.println(sumMap);
        System.out.println(sumThirdWay);
    }

    private static Boolean isNumber(String element) {
        for (char ch : element.toCharArray()) {
            if (!Character.isDigit(ch)) {
                return false;
            }
        }

        return true;
    }
}
