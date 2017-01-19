using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _08.CatalanNumbers
{
    class CatalanNumbers
    {
        static void Main()
        {
            //(2n)!/(n+1)!*n!
            //1 < n < 100
            try
            {
                Console.Write("Please enter an integer number which comply with the rule: 1 < n < 100 -> n: ");
                int n = int.Parse(Console.ReadLine());
                BigInteger factorial2n = 1;
                BigInteger factorialNplus1 = 1;
                BigInteger factorialN = 1;
                if (1 < n && n < 100)
                {
                    for (int i = 2; i <= 2 * n; i++)
                    {
                        if (i <= n)
                        {
                            factorialN *= i;
                        }
                        if (i <= (n + 1))
                        {
                            factorialNplus1 *= i;
                        }
                        factorial2n *= i;
                    }
                    Console.WriteLine(factorial2n / (factorialNplus1 * factorialN));
                }
                else
                {
                    Console.WriteLine("Please enter an integer number which complies with the rule: 1 < n < 100");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter an integer number!"); ;
            }
        }
    }
}
