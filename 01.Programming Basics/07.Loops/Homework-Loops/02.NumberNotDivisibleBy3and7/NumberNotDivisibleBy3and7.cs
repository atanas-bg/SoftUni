using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.NumberNotDivisibleBy3and7
{
    class NumberNotDivisibleBy3and7
    {
        static void Main()
        {
            Console.Write("Please enter a positive integer number: ");
            int number;
            while (!int.TryParse(Console.ReadLine(), out number))
            {
                Console.WriteLine("Please enter a positive integer number!");
            }
            if (number > 0)
            {
                for (int i = 1; i <= number; i++)
                {
                    if ((i % 3 != 0) && (i % 7 != 0))
                    {
                        Console.Write("{0} ", i);
                    }
                }
            }
            else
            {
                Console.WriteLine("Please enter a positive integer number!");
            }
        }
    }
}
