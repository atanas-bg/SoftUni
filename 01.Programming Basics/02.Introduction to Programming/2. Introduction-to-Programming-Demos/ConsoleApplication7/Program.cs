using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication7
{
    class Program
    {
        static void Main(string[] args)
        {
            long l = 5000000000;
            int a = (int)l;
            Console.WriteLine(Convert.ToString(l, 2).PadLeft(64, '0'));
            Console.WriteLine(Convert.ToString(a, 2).PadLeft(64, '0'));
            Console.WriteLine(a);

            double x = (4 / 3 + 17 * 4) / 7;
            double y = (4.0 / 3 + 17 * 4) / 7;
            double z = ((double)4 / 3 + 17 * 4) / 7;
            Console.WriteLine("x= "  + x);
            Console.WriteLine("y= " + y);
            Console.WriteLine("z= " + z);
        }
    }
}
