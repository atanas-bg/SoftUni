using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _06.Calculate2
{
    class Calculate2
    {
        //Write a program that calculates n! / k! for given n and k (1 < k < n < 100). Use only one loop.
        static void Main()
        {
            try
            {
                Console.WriteLine("Please enter two positive integer numbers 1 < k < n < 100.");
                Console.Write("Please enter number n: ");
                int n = int.Parse(Console.ReadLine());
                Console.Write("Please enter number k: ");
                int k = int.Parse(Console.ReadLine());
                BigInteger factorialK = 1;
                BigInteger factorialN = 1;
                if (1 < k && k < n && n<100)
                {

                    for (int i = 2; i <= n; i++)
                    {
                        if (i <= k)
                        {
                            factorialK *= i;
                        }
                        factorialN *= i;
                    }
                    Console.WriteLine(factorialN/factorialK);
                }
                else
                {
                    Console.WriteLine("The numbers must comply with the rule 1 < k < n < 100!");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter an integer number!");
            }
        }
    }
}
