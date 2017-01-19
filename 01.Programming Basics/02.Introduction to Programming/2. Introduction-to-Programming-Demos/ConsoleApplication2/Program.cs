using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)
        {
            bool isRaining = true;
            bool IsCar = false;
            bool isLazy = true;
            if (isRaining && IsCar || isLazy)
                Console.WriteLine("Ще отида с кола.");
       else
                Console.WriteLine("Ще отида пеша.");

        }
    }
}
