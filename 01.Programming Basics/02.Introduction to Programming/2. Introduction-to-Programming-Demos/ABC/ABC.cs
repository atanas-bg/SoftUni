using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABC
{
    class ABC
    {
        static void Main()
        {
            int rows = 6;
            int columns = 4;
            char letter = 'A';//(char)65
            char[,] alphabet = new char[rows, columns];
            for (int row = 0; row < rows; row++)
            {
                for (int column = 0; column < columns; column++)
                {
                    alphabet[row, column] = letter;
                    letter++;
                    Console.Write(alphabet[row, column]+" ");
                }
                Console.WriteLine();
            }
        }
    }
}
