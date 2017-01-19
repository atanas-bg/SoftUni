package Task01.JavaCollectionsBasics;

import java.io.FileOutputStream;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

/**
 * Created by User on 9.4.2016 г..
 */
public class JavaCollectionsBasics {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int num = 0;
        num = getValidInteger(console, num);
        int[] numbers = new int[num];

        int value = 0;
        for (int index = 0; index < numbers.length; index++) {
            value = getValidInteger(console, value);

            numbers[index]= value;
        }

        Arrays.sort(numbers);

        System.out.print(numbers[0]);
        for (int index = 1; index < numbers.length; index++) {
            System.out.print(" " + numbers[index]);
        }
    }

    private static int getValidInteger(Scanner console, int value) {
        while (console.hasNext()) {
            if (console.hasNextInt()) {
                value = console.nextInt();
                break;
            } else {
                System.out.println("Invalid number. Please enter an integer number: ");
                console.next();
            }
        }
        return value;
    }
}
