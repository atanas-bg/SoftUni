using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DivideBy273
{
    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            if (n % 2 == 0)
            {
                Console.WriteLine("Even");
            }
            else
            {
                Console.WriteLine("Odd");
            }
            
            
            if (n % 3 == 0)
            {
                Console.WriteLine("Thenumber can be divided by 3.");
            }
            else if (n % 7 == 0)
            {
                Console.WriteLine("Thenumber can be divided by 3.");
            }

            else
            {
                Console.WriteLine("Invalid number.");
            }
        }
    }
}
