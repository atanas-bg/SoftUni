using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.MultiplicationSign
{
    class MultiplicationSign
    {
        static void Main()
        {
            try
            {
                int a = int.Parse(Console.ReadLine());
                int b = int.Parse(Console.ReadLine());
                int c = int.Parse(Console.ReadLine());
                bool sign = true;

                if (a < 0)
                {
                    sign = !sign;
                }

                if (b < 0)
                {
                    sign = !sign;
                }

                if (c < 0)
                {
                    sign = !sign;
                }

                if (a == 0 || b == 0 || c == 0)
                {
                    Console.WriteLine("0");
                }
                else if (sign == true)
                {
                    Console.WriteLine("+");
                }
                else if (sign == false)
                {
                    Console.WriteLine("-");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid number");
            }
        }
    }
}
