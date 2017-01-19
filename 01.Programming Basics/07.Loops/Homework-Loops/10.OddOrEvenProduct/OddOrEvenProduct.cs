using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.OddOrEvenProduct
{
    class OddOrEvenProduct
    {
        static void Main()
        {
            Console.WriteLine("Please enter a line with integers, separated by space: ");
            string numbersLine = Console.ReadLine();
            string[] num = numbersLine.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            int[] numbers = Array.ConvertAll(num, int.Parse);
            int productOdd = 1;
            int productEven = 1;
            
            // int[] numbers = Console
            //.ReadLine()
            //.Split(new Char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
            //.Select(item => int.Parse(item))
            //.ToArray();
            for (int i = 0; i < numbers.Length; i = i + 2)
            {
                productOdd *= numbers[i];
            }
            for (int i = 1; i < numbers.Length; i=i+2)
            {
                productEven *= numbers[i];
            }
            if (productEven == productOdd)
            {
                Console.WriteLine("yes\nproduct = {0}", productOdd);
            }
            else
            {
                Console.WriteLine("no\nodd_product = {0}\neven_product = {1}", productOdd, productEven);
            }
        }
    }
}
