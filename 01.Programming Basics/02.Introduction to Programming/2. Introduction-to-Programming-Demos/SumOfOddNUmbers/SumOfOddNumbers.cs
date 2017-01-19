using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SumOfOddNUmbers
{
    class SumOfOddNumbers
    {
        static void Main(string[] args)
        {
            Console.Write("Please enter a positive integer: ");
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            //int i = 1;
            //while (i <= n)
            while (n >= 1 && n % 2 == 1)
            {
                sum += n;
                n -= 2;
            }
            Console.WriteLine("The sum is " + sum);
        }
    }
}
