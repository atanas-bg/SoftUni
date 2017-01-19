import java.util.Scanner;

public class ConvertFromDecimalSystemToBase7 {

	public static void main(String[] args) {
		Scanner console = new Scanner(System.in);
		int integerNumber = console.nextInt();
		String sevenSystem = Integer.toString(integerNumber, 7);
		System.out.println(sevenSystem);
	}

}
