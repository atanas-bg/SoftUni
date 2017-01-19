using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.MatrixOfNumbers
{
    class MatrixOfNumbers
    {
        static void Main()
        {
            try
            {
                Console.Write("Please enter a positive integer number which complies with the rule:\n 1 <= n <= 20 -> n: ");
                int n = int.Parse(Console.ReadLine());
                if (1 <= n && n <= 20)
                {
                    for (int i = 1; i <= n; i++)
                    {
                        for (int p = i; p <= i + 3; p++)
                        {
                            Console.Write("{0} ", p);
                        }
                        Console.WriteLine();
                    }
                }
                else
                {
                    Console.WriteLine("Please enter a positive integer number which complies with the rule:\n 1 <= n <= 20");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter an integer number!");
            }
        }
    }
}
