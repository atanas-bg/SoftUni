using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace Factorial
{
    class Factorial
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            BigInteger factorial = 1;
            do
            {
                factorial *= number;
                number--;
            } while (number > 1);
            Console.WriteLine(factorial);
        }
    }
}
