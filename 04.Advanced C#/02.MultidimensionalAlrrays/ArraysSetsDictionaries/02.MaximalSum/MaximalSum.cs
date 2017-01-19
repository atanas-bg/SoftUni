namespace _02.MaximalSum
{
    using System;
    using System.Linq;

    class MaximalSum
    {
        static void Main()
        {
            int[] matrixSizes =
                Console.ReadLine()
                .Trim()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(number => int.Parse(number))
                .ToArray();

            int rowSize = 0;
            int columnSize = 0;

            if (matrixSizes.Length == 2)
            {
                rowSize = matrixSizes[0];
                columnSize = matrixSizes[1];
            }
            else
            {
                Console.WriteLine("Invalid matrixSizes");
                return;
            }

            int[,] matrix = new int[rowSize, columnSize];

            for (int row = 0; row < rowSize; row++)
            {

                int[] matrixRow =
                Console.ReadLine()
                .Trim()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(number => int.Parse(number))
                .ToArray();

                if (matrix.GetLength(1) == matrixRow.Length)
                {
                    for (int column = 0; column < matrix.GetLength(1); column++)
                    {
                        matrix[row, column] = matrixRow[column];
                    }
                }
            }

            long squareSum = int.MinValue;
            int bestRow = 0;
            int bestColumn = 0;
            int squareSize = 3;
            long sum = 0;

            for (int row = 0; row < matrix.GetLength(0) - squareSize + 1; row++)
            {
                for (int column = 0; column < matrix.GetLength(1) - squareSize + 1; column++)
                {
                    for (int squareRow = 0; squareRow < squareSize; squareRow++)
                    {
                        for (int squareCol = 0; squareCol < squareSize; squareCol++)
                        {
                            sum += matrix[row + squareRow, column + squareCol];
                        }
                    }

                    if (squareSum < sum)
                    {
                        squareSum = sum;
                        bestRow = row;
                        bestColumn = column;
                    }

                    sum = 0;
                }
            }

            Console.WriteLine("Sum = {0}", squareSum);

            for (int row = bestRow; row < bestRow + squareSize; row++)
            {
                for (int col = bestColumn; col < bestColumn + squareSize; col++)
                {
                    Console.Write("{0} ", matrix[row, col]);
                }

                Console.WriteLine();
            }
        }
    }
}
