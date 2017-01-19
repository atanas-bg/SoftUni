using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _07.Calculate3
{
    class Calculate3
    {
        static void Main()
        {
            //n! / (k! * (n-k)!) 
            try
            {
                Console.WriteLine("Please enter two positive integer numbers that comply with the rule:\n 1 < k < n < 100.");
                Console.Write("Please enter the number of elements in the group -> n: ");
                int n = int.Parse(Console.ReadLine());
                Console.Write("Please enter the number of members to choose -> k: ");
                int k = int.Parse(Console.ReadLine());
                BigInteger factorialK = 1;
                BigInteger factorialN = 1;
                BigInteger factorialNminusK = 1;
                
                if (1 < k && k < n && n < 100)
                {
                    int num = n - k;
                    for (int i = 2; i <= n; i++)
                    {
                        if (i <= k)
                        {
                            factorialK *= i;
                        }
                        if (i <= num)
                        {
                            factorialNminusK *= i;
                        }
                        factorialN *= i;
                    }
                    Console.WriteLine("The number of combinations is {0}.", factorialN / (factorialK * factorialNminusK));
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
