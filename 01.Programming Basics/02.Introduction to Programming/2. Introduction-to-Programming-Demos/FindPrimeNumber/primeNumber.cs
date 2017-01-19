using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindPrimeNumber
{
    class primeNumber
    {
        static void Main()
        {
            //412561835108655313
            ulong number = ulong.Parse(Console.ReadLine());
            ulong divider = 2;
            ulong maxdivider = (ulong)Math.Sqrt(number);
            bool prime = true;
            while (divider < maxdivider)
            {
                if (maxdivider % divider == 0)
                {
                    prime = false;
                }
                divider++;
            }
            Console.WriteLine(prime);
        }
    }
}
