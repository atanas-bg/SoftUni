import java.util.Scanner;

public class ConvertFromBase7ToDecimal {

	public static void main(String[] args) {
		Scanner console = new Scanner(System.in);
		String inputNumber = console.nextLine();

		// First solution
		int decimalNumber = Integer.parseInt(inputNumber, 7);
		System.out.println(decimalNumber);

		// Second solution
		int secondDecimal = convertSevenNumeralSystemToDecimal(inputNumber);
		System.out.println(secondDecimal);
	}

	public static int convertSevenNumeralSystemToDecimal(String inputNummber) {
		int val = 0;
		for (int i = 0; i < inputNummber.length(); i++) {

			// First solution to parse a char to int
			int digit = Character.getNumericValue(inputNummber.charAt(i));

			// Second solution to parse a char to int
			// int digit = inputNummber.charAt(i) - '0';

			val = 7 * val + digit;
		}

		return val;
	}

}
