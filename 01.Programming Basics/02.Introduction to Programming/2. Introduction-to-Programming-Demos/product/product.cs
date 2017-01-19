using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace product
{
    class product
    {
        static void Main()
        {
            int p = int.Parse(Console.ReadLine());
            int r = int.Parse(Console.ReadLine());
            decimal product = 1;
            do
            {
                product *= p;
                p++;
            } while (p<=r);
            Console.WriteLine(product);
        }
    }
}
