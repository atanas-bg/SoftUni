package Task12.CalculateNFactorial;

import java.util.Scanner;

/**
 * Created by User on 12.4.2016 г..
 */
public class CalculateNFactorial {
    public static void main(String[] args) {
    Scanner console = new Scanner(System.in);
        int number = console.nextInt();
        long result = nFactorial(number);
        System.out.println(result);
    }

    private static long nFactorial(int number) {
        if(number == 0 || number == 1){
            return 1;
        }

        long result = number * nFactorial(number - 1);
        return result;
    }
}
