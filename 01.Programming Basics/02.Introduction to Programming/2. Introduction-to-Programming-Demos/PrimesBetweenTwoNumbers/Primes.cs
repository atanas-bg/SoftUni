using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimesBetweenTwoNumbers
{
    class Primes
    {
        static void Main(string[] args)
        {
            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());

            for (int number = firstNumber; number <= secondNumber; number++)
            {
                bool prime = true;
                //for (int divider = 2; divider <= Math.Floor(Math.Sqrt(number)); divider++)
                //{
                //    if (number % divider == 0)
                //    {
                //        prime = false;
                //        break;
                //    }

                //}
                int divider = 2;
                int maxdivider = (int)Math.Sqrt(number);
                while (divider <= maxdivider)
                {
                    if (number % divider == 0)
                    {
                        prime = false;
                        break;
                    }
                    divider++;
                }
                if (prime)
                {
                    Console.Write("{0} ", number);
                }
            }
        }
    }
}
