using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.SortingNumbers
{
    class SortingNumbers
    {
        static void Main()
        {
            Console.Write("How many integer numbers do You want to enter: ");
            int integersCount;
            while (!int.TryParse(Console.ReadLine(), out integersCount))
            {
                Console.Write("Please enter an integer number: ");
            }
            if (integersCount > 0)
            {
                int[] integerNumbers = new int[integersCount];
                int parsedNumber;
                for (int i = 0; i < integersCount; i++)
                {
                    Console.Write("Please enter number {0}: ", i + 1);
                    while (!int.TryParse(Console.ReadLine(), out parsedNumber))
                    {
                        Console.Write("Please enter an integer number: ");
                    }
                    integerNumbers[i] = parsedNumber;
                }
                Array.Sort(integerNumbers);

                foreach (int number in integerNumbers)
                {
                    Console.WriteLine(number);
                }
            }
            else
            {
                Console.WriteLine("Not a positive integer number!");
            }
        }
    }
}
