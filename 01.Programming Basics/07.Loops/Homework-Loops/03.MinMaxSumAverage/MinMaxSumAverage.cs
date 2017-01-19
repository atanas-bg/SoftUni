using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.MinMaxSumAverage
{
    class MinMaxSumAverage
    {
        static void Main()
        {
            Console.Write("How many numbers do You want to enter?: ");
            int n;
            while (!int.TryParse(Console.ReadLine(), out n))
            {
                Console.WriteLine("Please enter an integer number!");
            }
            int[] numbers = new int[n];
            int sum = 0;
            int? min = null;
            int? max = null;
            double average;
            for (int i = 0, p = 1; i < n; i++, p++)
            {
                Console.Write("Please enter number {0}: ", p);
                int num;
                while (!int.TryParse(Console.ReadLine(), out num))
                {
                    Console.WriteLine("Please enter a valid integer number!");
                }
                numbers[i] = num;
            }
            for (int i = 0; i < n; i++)
            {
                sum += numbers[i];
                if (!max.HasValue || max < numbers[i])
                {
                    max = numbers[i];
                }
                if (!min.HasValue || min > numbers[i])
                {
                    min = numbers[i];
                }
            }
            average = sum / (double)n;
            Console.WriteLine("The minimum value is {0:0.00} ", min);
            Console.WriteLine("The maximum value is {0:0.00} ", max);
            Console.WriteLine("The average value is {0:0.00} ", average);
            Console.WriteLine("The sum of all numbers is {0:0.00} ", sum);
        }
    }
}
