import java.util.Scanner;

/**
 * Created by User on 20.3.2016 г..
 */
public class GhettoNumeralSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        String input = scanner.nextLine();
        StringBuilder result = new StringBuilder();

        ConvertToGhettoNumeralSystem(input, result);

        System.out.println("Result = " + result);
    }

    private static void ConvertToGhettoNumeralSystem(String input, StringBuilder result) {
        for (int index = 0; index < input.length(); index++) {
            switch (input.charAt(index)) {
                case '0':
                    result.append("Gee");
                    break;
                case '1':
                    result.append("Bro");
                    break;
                case '2':
                    result.append("Zuz");
                    break;
                case '3':
                    result.append("Ma");
                    break;
                case '4':
                    result.append("Duh");
                    break;
                case '5':
                    result.append("Yo");
                    break;
                case '6':
                    result.append("Dis");
                    break;
                case '7':
                    result.append("Hood");
                    break;
                case '8':
                    result.append("Jam");
                    break;
                case '9':
                    result.append("Mack");
                    break;
                default:
                    System.out.println("Invalid Number.");
                    break;
            }
        }
    }
}
