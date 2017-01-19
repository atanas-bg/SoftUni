using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABC2
{
    class ABC2ram
    {
        static void Main()
        {
            int rows = 10, cols = 50;
            char[,] matrix = new char[rows, cols];
            char letter = 'A';
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    matrix[row, col] = (char)((letter++ - 65) % 26 + 65);
                    Console.Write((matrix[row, col]));
                }
                Console.WriteLine();
            }

        }
    }
}
