import java.util.Scanner;

public class FormattingNumbers {
	public static void main(String[] args) {
		Scanner console = new Scanner(System.in);
		int a = console.nextInt();
		double b = console.nextDouble();
		double c = console.nextDouble();
		String binaryA = Integer.toBinaryString(a);

		// Creates a string with ten zeroes
		String zeroPadding = new String(new char[10]).replace('\0', '0');

		// Creates a left padded binary number
		binaryA = zeroPadding.substring(0, (zeroPadding.length() - binaryA.length())) + binaryA;

		System.out.printf("|%-10x|%s|%10.2f|%-10.3f|", a, binaryA, b, c);
		console.close();
	}
}
