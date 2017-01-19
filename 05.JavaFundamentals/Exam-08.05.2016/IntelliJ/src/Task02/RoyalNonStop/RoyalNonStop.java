package Task02.RoyalNonStop;

import java.math.BigDecimal;
import java.util.Scanner;

/**
 * Created by User on 8.5.2016 г..
 */
public class RoyalNonStop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int matrixRow = console.nextInt();
        int matrixCol = console.nextInt();
        console.nextLine();
        BigDecimal lukankaPrice = console.nextBigDecimal();
        BigDecimal rakyaPrice = console.nextBigDecimal();
        console.nextLine();

        String[][] matrix = new String[matrixRow][matrixCol];
        for (int row = 0; row < matrixRow; row++) {
            for (int col = 0; col < matrixCol; col++) {
                if (row % 2 == 0) {
                    matrix[row][col] = "L";
                } else {
                    matrix[row][col] = "R";
                }
            }
        }
        matrix[0][0] = "D";

        String[] inputCellCoordinates = new String[2];
        int inputCellRow;
        int inputCellCol;
        long customersCounter = 0;
        BigDecimal sum = BigDecimal.ZERO;
        String line;
        while (!(line = console.nextLine()).equals("Royal Close")) {
            inputCellCoordinates = line.split("\\s+");
            inputCellRow = Integer.parseInt(inputCellCoordinates[0]);
            inputCellCol = Integer.parseInt(inputCellCoordinates[1]);
            customersCounter += 1;


            if (inputCellRow >= inputCellCol) {
                while (inputCellCol > 0) {
                    if (matrix[inputCellRow][inputCellCol].equals("L")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(lukankaPrice));
                        inputCellCol -= 1;
                    } else if (matrix[inputCellRow][inputCellCol].equals("R")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(rakyaPrice));
                        inputCellCol -= 1;
                    } else { //D
                        break;
                    }
                }

                while (inputCellRow > 0) {
                    if (matrix[inputCellRow][inputCellCol].equals("L")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(lukankaPrice));
                        inputCellRow -= 1;
                    } else if (matrix[inputCellRow][inputCellCol].equals("R")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(rakyaPrice));
                        inputCellRow -= 1;
                    }
                }

            } else {
                while (inputCellRow > 0) {
                    if (matrix[inputCellRow][inputCellCol].equals("L")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(lukankaPrice));
                        inputCellRow -= 1;
                    } else if (matrix[inputCellRow][inputCellCol].equals("R")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(rakyaPrice));
                        inputCellRow -= 1;
                    }
//                    else { //D
//                        break;
//                    }
                }

                while (inputCellCol > 0) {
                    if (matrix[inputCellRow][inputCellCol].equals("L")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(lukankaPrice));
                        inputCellCol -= 1;
                    } else if (matrix[inputCellRow][inputCellCol].equals("R")) {
                        sum = sum.add(BigDecimal.valueOf((inputCellRow + 1) * (inputCellCol + 1)).multiply(rakyaPrice));
                        inputCellCol -= 1;
                    }
                }
            }
        }

        sum = sum.setScale(6);
        System.out.println(sum);
        System.out.println(customersCounter);

    }
}
