using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;


namespace _05.Calculate
{
    class Calculate
    {
        static void Main()
        {
            //S = 1 + 1!/x + 2!/x2 + … + n!/xn
            try
            {
                decimal sum = 1;
                decimal factorial = 1;
                decimal product = 1;
                Console.Write("Please enter a positive integer number n: ");
                int n = int.Parse(Console.ReadLine());

                if (n > 0)
                {
                    Console.Write("Please enter integer number x: ");
                    int x = int.Parse(Console.ReadLine());
                    for (int i = 1; i <= n; i++)
                    {
                        factorial *= i;
                        product *= x;
                        sum = sum + (factorial / product);
                    }
                    Console.WriteLine("{0:0.00000}", sum);
                }
                else
                {
                    Console.WriteLine("Please enter a positive integer number!");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter an integer number!");
            }
        }
    }
}
