using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.MatrixOfPalindromes
{
    class MatrixOfPalindromes
    {
        static void Main()
        {
            Console.Write("r=");
            int r = int.Parse(Console.ReadLine());
            Console.Write("c=");
            int c = int.Parse(Console.ReadLine());
            string[,] palindroms = new string[r, c];
            char[] word = new char[3];
            
            for (int row = 0; row < r; row++)
            {
                for (int column = 0; column < c; column++)
                {
                    //'a' = (char)97
                    word[0] = (char)(((97 + row) - 97) % 26 + 97);
                    word[1] = (char)(((97 + row + column) - 97) % 26 + 97);
                    word[2] = (char)(((97 + row) - 97) % 26 + 97);
                    string palindrom = new string(word);
                    palindroms[row, column] = palindrom;
                    Console.Write("{0} ", palindroms[row, column]);
                }
                Console.WriteLine();
            }
        }
    }
}
