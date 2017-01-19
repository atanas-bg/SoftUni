using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.WeightOnMoon
{
    class WeightOnMoon
    {
        static void Main(string[] args)
        {
            Console.Write("Enter weight: ");
            try
            {
                double weight = Double.Parse(Console.ReadLine());
                Console.WriteLine("The weight on Moon is: " + weight * 0.17);
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid Number!");
            }
        }
    }
}
