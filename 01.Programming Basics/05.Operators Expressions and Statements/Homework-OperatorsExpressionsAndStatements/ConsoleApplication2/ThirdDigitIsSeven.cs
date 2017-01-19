using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class ThirdDigitIsSeven
    {
        static void Main(string[] args)
        {
            int b, c;
            Console.Write("Enter a numer: ");
            try
            {
                int a = int.Parse(Console.ReadLine());
                if (a > 100)
                {
                    b = a / 100;
                    c = b % 10;
                    if (c == 7)
                    {
                        Console.WriteLine(true);
                    }
                    else
                    {
                        Console.WriteLine(false);
                    }

                }
                else
                {
                    Console.WriteLine(false);
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid Number!");
            }
        }
    }
}
