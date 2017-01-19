using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.RandomNumbers
{
    class RandomNumbers
    {
        static void Main()
        {
            Console.Write("Please enter a minimum value: ");
            int min;
            while (!int.TryParse(Console.ReadLine(), out min))
            {
                Console.WriteLine("Please enter an integer number!");
            }
            Console.Write("Please enter a maximum value: ");
            int max;
            while (!int.TryParse(Console.ReadLine(), out max))
            {
                Console.WriteLine("Please enter an integer number!");
            }
            Console.Write("Please enter the number of the random numbers: ");
            int n;
            while (!int.TryParse(Console.ReadLine(), out n))
            {
                Console.WriteLine("Please enter an integer number!");
            }
            if (min < max)
            {
                Random rnd = new Random();
                for (int i = 1; i <= n; i++)
                {
                    Console.Write("{0} ", rnd.Next(min, max + 1));
                }
            }
            else
            {
                Console.WriteLine("Please enter correct values!");
            }
        }
    }
}
