using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.PointInACircle
{
    class PointInACircle
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter x: ");
            double x = Double.Parse(Console.ReadLine());
            Console.WriteLine("Enter y: ");
            double y = Double.Parse(Console.ReadLine());

            if (x>=-2 && x<= 2 && y>=-2 && y<=2)
            {
                Console.WriteLine(true);
            }
            else
            {
                Console.WriteLine(false);
            }
        }
    }
}
