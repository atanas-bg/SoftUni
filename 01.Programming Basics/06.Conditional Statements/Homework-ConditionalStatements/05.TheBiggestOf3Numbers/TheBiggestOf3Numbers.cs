using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.TheBiggestOf3Numbers
{
    class TheBiggestOf3Numbers
    {
        static void Main()
        {
            try
            {
                double a = double.Parse(Console.ReadLine());
                double b = double.Parse(Console.ReadLine());
                double c = double.Parse(Console.ReadLine());
                double biggernumber = a;
                if (biggernumber < b)
                {
                    biggernumber = b;
                }

                if (biggernumber < c)
                {
                    biggernumber = c;
                }
                Console.WriteLine(biggernumber);
            }
            catch (FormatException)
            {

                Console.WriteLine("Enter a valid number!");
            }
        }
    }
}
