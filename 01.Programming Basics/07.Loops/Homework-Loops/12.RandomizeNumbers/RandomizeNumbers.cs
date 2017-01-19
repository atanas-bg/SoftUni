using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.RandomizeNumbers
{
    class RandomizeNumbers
    {
        static void Main()
        {
            Console.Write("Please enter a positive integer number: ");
            int n;
            while (!int.TryParse(Console.ReadLine(), out n))
            {
                Console.WriteLine("Please enter an integer number!");
            }
            if (n >= 1)
            {
                //не е довършена
                Random number = new Random();
                int[] numbers = new int[n];
                for (int i = 0; i < n; i++)
                {
                    Console.Write("{0} ", number.Next(1, n));
                }
            }
            else
            {
                Console.WriteLine("Please enter a positive integer!");
            }
        }
    }
}
