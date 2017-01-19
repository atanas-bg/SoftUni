using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.TheBiggestOf5Numbers
{
    class TheBiggestOf5Numbers
    {
        static void Main()
        {
            try
            {
                double a = double.Parse(Console.ReadLine());
                double b = double.Parse(Console.ReadLine());
                double c = double.Parse(Console.ReadLine());
                double d = double.Parse(Console.ReadLine());
                double e = double.Parse(Console.ReadLine());
                double biggernumber = a;
                if (biggernumber < b)
                {
                    biggernumber = b;
                }
                if (biggernumber < c)
                {
                    biggernumber = c;
                }
                if (biggernumber < d)
                {
                    biggernumber = d;
                }
                if (biggernumber < e)
                {
                    biggernumber = e;
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
