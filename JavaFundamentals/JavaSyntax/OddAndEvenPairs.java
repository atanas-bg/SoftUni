import java.util.Scanner;

public class OddAndEvenPairs {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String[] inputString = console.nextLine().split("\\s");
        boolean isLengthEven = (inputString.length % 2) == 0;
        if (!(isLengthEven)) {
            System.out.println("Invalid length");
            return;
        }

        int[] numbers = new int[inputString.length];

        for (int index = 0; index < inputString.length; index++) {
            numbers[index] = Integer.parseInt(inputString[index]);
        }

        for (int index = 0; index < numbers.length; index += 2) {
            if ((numbers[index] % 2 == 0) && (numbers[index + 1] % 2 == 0)) {
                System.out.printf("%d, %d -> both are even\n", numbers[index], numbers[index + 1]);
            } else if ((numbers[index] % 2 != 0) && (numbers[index + 1] % 2 != 0)) {
                System.out.printf("%d, %d -> both are odd\n", numbers[index], numbers[index + 1]);
            } else {
                System.out.printf("%d, %d -> different\n", numbers[index], numbers[index + 1]);
            }
        }
    }
}


