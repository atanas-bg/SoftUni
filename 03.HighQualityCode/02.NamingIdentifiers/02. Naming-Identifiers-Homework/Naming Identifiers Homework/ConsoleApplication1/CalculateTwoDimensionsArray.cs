using System;

namespace CalculatingTwoDimensionsArray

{
    class CalculateTwoDimensionsArray
    {
        static void Main()
        {
            var firstArray = new double[,] { { 1, 3 }, { 5, 7 } };
            var secondArray = new double[,] { { 4, 2 }, { 1, 5 } };
            var newDoubleArray = CalculateNewArray(firstArray, secondArray);

            var newDoubleArrayRowLength = newDoubleArray.GetLength(0);
            var newDoubleArrayColumnLength = newDoubleArray.GetLength(1);

            //Printing the array with loops
            for (int i = 0; i < newDoubleArrayRowLength; i++)
            {
                for (int j = 0; j < newDoubleArrayColumnLength; j++)
                {
                    Console.Write(newDoubleArray[i, j] + " ");
                }
                Console.WriteLine();
            }

        }

        static double[,] CalculateNewArray(double[,] firstArray, double[,] secondArray)
        {
            var firstArrayRowLength = firstArray.GetLength(0);
            var firstArrayColumnLength = firstArray.GetLength(1);
            var secondArrayRowLength = secondArray.GetLength(0);
            var secondArrayColumnLength = secondArray.GetLength(1);

            if (firstArrayColumnLength != secondArrayRowLength)
            {
                throw new Exception("Error!");
            }

            //var firstDoublesLength = firstArrayColumnLength;
            var doublesArray = new double[firstArrayRowLength, secondArrayColumnLength];
            var doublesArrayRowLength = doublesArray.GetLength(0);
            var doublesArrayColumnLength = doublesArray.GetLength(1);

            for (int i = 0; i < doublesArrayRowLength; i++)
                for (int j = 0; j < doublesArrayColumnLength; j++)
                    for (int p = 0; p < firstArrayColumnLength; p++)
                        doublesArray[i, j] += firstArray[i, p] * secondArray[p, j];
            return doublesArray;
        }
    }
}