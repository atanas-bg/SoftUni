import java.util.Scanner;

/**
 * Created by User on 20.3.2016 г..
 */
public class SumNumbersFromOneToN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.next());
        int sum = 0;

        for (int i = 1; i <= number; i++) {
            sum += i;
        }
        System.out.print(sum);
    }

}
