using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.OddOrEvenNumber
{
    class OddorEvenNumber
    {
        static void Main(string[] args)
        {
            try
            {
                Console.Write("Enter a number: ");
                int number = int.Parse(Console.ReadLine());
                if (number % 2 == 0)
                {
                    Console.WriteLine("The number is Even.");
                }

                else

                {
                    Console.WriteLine("The number is Odd.");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid Number!");
            }
        }
    }
}
