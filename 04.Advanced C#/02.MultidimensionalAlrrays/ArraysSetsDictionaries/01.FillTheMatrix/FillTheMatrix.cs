using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.FillTheMatrix
{
    class FillTheMatrix
    {
        static void Main()
        {
            //Enter the matrix row and column sizes
            Console.Write("Matrix row size = ");
            int rowSize = int.Parse(Console.ReadLine());
            Console.WriteLine();

            Console.Write("Matrix column size = ");
            int columnSize = int.Parse(Console.ReadLine());
            Console.WriteLine();

            //Initialize the matrix with the given sizes
            int[,] matrix = new int[rowSize, columnSize];

            ////Filling the matrix with pattern A
            //for (int column = 0; column < matrix.GetLength(1); column++)
            //{
            //    for (int row = 0; row < matrix.GetLength(0); row++)
            //    {
            //        Console.Write("Matrix[{0},{1}] = ", row, column);
            //        int insertedValue = int.Parse(Console.ReadLine());
            //        matrix[row, column] = insertedValue;
            //    }
            //}

            //Filling the matrix with pattern B
            bool fillFromTopToBottom = true;
            for (int column = 0; column < matrix.GetLength(1); column++)
            {
                if (fillFromTopToBottom)
                {
                    for (int row = 0; row < matrix.GetLength(0); row++)
                    {
                        Console.Write("Matrix[{0},{1}] = ", row, column);
                        int insertedValue = int.Parse(Console.ReadLine());
                        matrix[row, column] = insertedValue;
                    }

                    fillFromTopToBottom = false;
                }
                else
                {
                    for (int row = matrix.GetLength(0) - 1; row >= 0; row--)
                    {
                        Console.Write("Matrix[{0},{1}] = ", row, column);
                        int insertedValue = int.Parse(Console.ReadLine());
                        matrix[row, column] = insertedValue;
                    }

                    fillFromTopToBottom = true;
                }
            }

            //Print the matrix
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int column = 0; column < matrix.GetLength(1); column++)
                {
                    Console.Write(matrix[row, column]);
                }

                Console.WriteLine();
            }
        }
    }
}
