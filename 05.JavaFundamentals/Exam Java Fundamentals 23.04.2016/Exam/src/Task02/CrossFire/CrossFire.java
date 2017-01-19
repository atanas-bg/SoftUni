package Task02.CrossFire;

import java.util.Scanner;

/**
 * Created by User on 23.4.2016 г..
 */
public class CrossFire {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int matrixRow = console.nextInt();
        int matrixColumn = console.nextInt();
        console.nextLine();

        int[][] matrix = new int[matrixRow][matrixColumn];
        int n = 1;

        for (int row = 0; row < matrixRow; row++) {
            for (int column = 0; column < matrixColumn; column++) {
                matrix[row][column] = n + column;
                if (column == matrixColumn - 1) {
                    n = n + column + 1;
                }
            }
        }

        String[][] stringMatrix = new String[matrixRow][matrixColumn];
        for (int row = 0; row < matrixRow; row++) {
            for (int column = 0; column < matrixColumn; column++) {
                stringMatrix[row][column] = Integer.toString(matrix[row][column]);
            }
        }

        String input = console.nextLine();

        while (!input.equals("Nuke it from orbit")) {
            String[] stringTokens = input.split(" ");
            int impactRow = Integer.parseInt(stringTokens[0]);
            int impactColumn = Integer.parseInt(stringTokens[1]);
            int impactRadius = Integer.parseInt(stringTokens[2]);
            int borderIndex = 0;
            if (impactRow >= 0 && impactRow < matrixRow && impactColumn >= 0 && impactColumn < matrixColumn) {
                //right
                if ((impactColumn + impactRadius) < matrixColumn) {
                    borderIndex = impactColumn + impactRadius;
                } else {
                    borderIndex = matrixColumn - 1;
                }

                for (int index = impactColumn; index <= borderIndex; index++) {
                    stringMatrix[impactRow][index] = "";
                }

                //left
                if ((impactColumn - impactRadius) >= 0) {
                    borderIndex = impactColumn - impactRadius;
                } else {
                    borderIndex = 0;
                }

                for (int index = borderIndex; index < impactColumn; index++) {
                    stringMatrix[impactRow][index] = "";
                }

                //up
                if ((impactRow - impactRadius) >= 0) {
                    borderIndex = impactRow - impactRadius;
                } else {
                    borderIndex = 0;
                }

                for (int index = borderIndex; index < impactRow; index++) {
                    stringMatrix[index][impactColumn] = "";
                }

                //down
                if ((impactRow + impactRadius) < matrixRow) {
                    borderIndex = impactRow + impactRadius;
                } else {
                    borderIndex = matrixRow - 1;
                }

                for (int index = impactRow + 1; index <= borderIndex; index++) {
                    stringMatrix[index][impactColumn] = "";
                }

                for (int row = 0; row < matrixRow; row++) {
                    while (true) {
                        boolean hasFallen = false;
                        for (int col = matrixColumn - 2; col >= 0; col--) {
                            String topElement = stringMatrix[row][col + 1];
                            String currentElement = stringMatrix[row][col];
                            if (currentElement.equals("") && !topElement.equals("")) {
                                stringMatrix[row][col] = topElement;
                                stringMatrix[row][col + 1] = "";
                                hasFallen = true;
                            }
                        }

                        if (!hasFallen) {
                            break;
                        }
                    }

                }
            }
            input = console.nextLine();
        }

        for (int row = 0; row < matrixRow; row++) {
            for (int column = 0; column < matrixColumn; column++) {
                if (column == matrixColumn - 1) {
                    System.out.println(stringMatrix[row][column]);
                } else {
                    System.out.print(stringMatrix[row][column] + " ");
                }

            }

        }
    }
}

