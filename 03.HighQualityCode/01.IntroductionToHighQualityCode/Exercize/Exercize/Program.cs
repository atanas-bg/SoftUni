using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Exercize
{
    class Program
    {
        static void Main()
        {
            int a = 5;
            int b = 4;
            int c = CalculateProduct(a, b);
            int g = CalculateProduct(a, b);
        }
        /// <summary>
        /// Calculates and returns the product of two integer numbers.
        /// </summary>
        /// <param name="a">The first number</param>
        /// <param name="b">The second number</param>
        /// <returns>The product of the two integers</returns>
        private static int CalculateProduct(int a, int b)
        {
            var product =  a * b;
            return product;
        }
    }
}
