using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.NumbersFrom1toN
{
    class NumbersFrom1toN
    {
        static void Main()
        {
            Console.Write("Please enter a positive integer number: ");
            int number;
            while (!int.TryParse(Console.ReadLine(), out number))
            {
                Console.WriteLine("Please enter a valid number!");
            }
            if (number > 0)
            {
                for (int i = 1; i <= number; i++)
                {
                    Console.Write("{0} ", i);
                }
            }
            else
            {
                Console.WriteLine("Please enter a positive integer number!");
            }
        }
    }
}
