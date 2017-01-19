using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.DivideBySevenAndFive
{
    class DivideBySevenAndFive
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            try
            {
                int number = int.Parse(Console.ReadLine());
                if (number % 7 == 0 && number % 5 == 0)
                {
                    Console.WriteLine(true);
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
