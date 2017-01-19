using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.MatrixShuffling
{
    class MatrixShuffling
    {
        static void Main()
        {
            int rowSize = int.Parse(Console.ReadLine());
            int columnSize = int.Parse(Console.ReadLine());
            string[,] matrix = new string[rowSize, columnSize];

            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int column = 0; column < matrix.GetLength(1); column++)
                {
                    matrix[row, column] = Console.ReadLine();
                }
            }

            string inputValue = Console.ReadLine();
            int correctCommandLength = 5;

            while (inputValue != "END")
            {
                string[] command = inputValue.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                if (command.Length == correctCommandLength)
                {
                    if (command[0] == "swap")
                    {
                        int firstElementRow = int.Parse(command[1]);
                        int firstElementColumn = int.Parse(command[2]);
                        int secondElementRow = int.Parse(command[3]);
                        int secondElementColumn = int.Parse(command[4]);
                        bool areCoordinatesValid =
                            firstElementRow < rowSize &&
                            firstElementColumn < columnSize &&
                            secondElementRow < rowSize &&
                            secondElementColumn < columnSize;

                        if (areCoordinatesValid)
                        {
                            string oldValue = matrix[firstElementRow, firstElementColumn];
                            matrix[firstElementRow, firstElementColumn] = matrix[secondElementRow, secondElementColumn];
                            matrix[secondElementRow, secondElementColumn] = oldValue;

                            PrintMatrix(matrix);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input!");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid input!");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input!");
                }

                inputValue = Console.ReadLine();
            }
        }

        private static void PrintMatrix(string[,] matrix)
        {
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int column = 0; column < matrix.GetLength(1); column++)
                {
                    Console.Write(matrix[row, column] + " ");
                }

                Console.WriteLine();
            }
        }
    }
}
