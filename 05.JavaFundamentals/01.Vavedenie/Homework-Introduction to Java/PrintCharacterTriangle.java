import java.text.MessageFormat;
import java.util.Scanner;

/**
 * Created by User on 19.3.2016 г..
 */
public class PrintCharacterTriangle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String number = scanner.next();
        int triangleLength = Integer.parseInt(number);
        if (triangleLength > 0 && triangleLength < 27) {
            for (int row = 1; row <= triangleLength; row++) {
                System.out.print('a');
                for (char character = 'b'; character < ('b' + row - 1); character++) {
                    String output = MessageFormat.format(" {0}", character);
                    System.out.print(output);
                }
                System.out.println();
            }

            for (int row = triangleLength - 1; row >= 1; row--) {
                System.out.print('a');
                for (char character = 'b'; character < ('b' + row - 1); character++) {
                    String output = MessageFormat.format(" {0}", character);
                    System.out.print(output);
                }
                System.out.println();
            }
        } else {
            System.out.println("The length of the triangle must be from 1 to 26, because the English alphabet symbols are 26");
        }
    }
}

