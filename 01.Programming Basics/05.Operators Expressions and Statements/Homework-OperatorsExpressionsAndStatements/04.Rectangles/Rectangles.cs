using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Rectangles
{
    class Rectangles
    {
        static void Main(string[] args)
        {
            
            try
            {
                Console.Write("Enter width: ");
                double a = Double.Parse(Console.ReadLine());
                Console.Write("Enter height: ");
                double b = Double.Parse(Console.ReadLine());
                double p = 2 * a + 2 * b;
                double s = a * b;
                Console.WriteLine("The Perimeter is: " + p);
                Console.WriteLine("The Area is: " + s);
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid number!");
            }

        }
    }
}
