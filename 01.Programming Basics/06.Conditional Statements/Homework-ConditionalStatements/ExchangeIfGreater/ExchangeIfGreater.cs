using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExchangeIfGreater
{
    class ExchangeIfGreater
    {
        static void Main()
        {
            int a;
            int b;
            int c;
            while (!int.TryParse(Console.ReadLine(), out a)) Console.WriteLine("Enter an integer number!");
            while (!int.TryParse(Console.ReadLine(), out b)) Console.WriteLine("Enter an integer number!");
            if (a > b)
            {
                c = a;
                a = b;
                b = c;

            }
            Console.WriteLine(a + " " + b);
        }
    }
}
