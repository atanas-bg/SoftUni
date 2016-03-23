import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.MessageFormat;
import java.util.Currency;
import java.util.Scanner;

/**
 * Created by User on 20.3.2016 г..
 */
public class GetAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("a = ");
        int a = Integer.parseInt(scanner.nextLine());
        System.out.print("b = ");
        int b = Integer.parseInt(scanner.nextLine());
        System.out.print("c = ");
        int c = Integer.parseInt(scanner.nextLine());
        double average = (double) (a + b + c) / 3;

        //First version
        System.out.printf("Average = %.2f", average);
        System.out.println();

        //Second version
        DecimalFormat df = new DecimalFormat("#.00");
        df.setRoundingMode(RoundingMode.CEILING);
        System.out.println("Average = " + df.format(average));
    }
}
