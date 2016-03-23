import java.util.Scanner;

/**
 * Created by User on 20.3.2016 г..
 */
public class SumNumbersFromOneToN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Entera number = ");
        int number = Integer.parseInt(scanner.next());
        int sum = 0;

        sum = getSumFromOneToN(number, sum);

        System.out.print("Result = " + sum);
    }

    private static int getSumFromOneToN(int number, int sum) {
        for (int i = 1; i <= number; i++) {
            sum += i;
        }
        return sum;
    }

}
