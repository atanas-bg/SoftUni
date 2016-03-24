import java.util.Scanner;

/**
 * Created by User on 24.3.2016 г..
 */
public class HitTheTarget {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int number = console.nextInt();
        int min = 1;
        int max = 20;

        for (int i = min; i <= max; i++) {
            for (int p = min; p <= max; p++) {
                if ((i + p) == number) {
                    System.out.printf("%d + %d = %d\n", i, p, number);
                }
            }
        }

        for (int i = min; i <= max; i++) {
            for (int p = min; p <= max; p++) {
                if ((i - p) == number) {
                    System.out.printf("%d - %d = %d\n", i, p, number);
                }
            }
        }
    }
}
