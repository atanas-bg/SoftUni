using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.ShuffleBits
{
    class ShuffleBits
    {
        static void Main()
        {
            long firstNumber = int.Parse(Console.ReadLine());
            long secondNumber = int.Parse(Console.ReadLine());
            long n, s;
            long number = 0 << 64;
            if (firstNumber > secondNumber)
            {
                for (int i = 31; i >= 0; i--)
                {
                    n = (firstNumber >> i) & 1;
                    number = number | (n << (2 * i + 1));
                    s = (secondNumber >> i) & 1;
                    number = number | (s << (2 * i));
                }
            }
            else
            {
                for (int i = 31; i >= 1; i = i - 2)
                {
                    n = (firstNumber >> i) & 1;
                    number = number | (n << (2 * i + 1));

                    n = (firstNumber >> (i - 1)) & 1;
                    number = number | (n << (2 * i));

                    s = (secondNumber >> i) & 1;
                    number = number | (s << (2 * i - 1));

                    s = (secondNumber >> (i - 1)) & 1;
                    number = number | ( s << (2 * i - 2));
                }
            }
            Console.WriteLine(number);
        }
    }
}
