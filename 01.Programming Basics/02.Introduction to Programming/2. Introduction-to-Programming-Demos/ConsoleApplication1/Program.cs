using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime d1 = DateTime.Now;
            Console.Write("Въведете дата:");
            string date = Console.ReadLine();
            DateTime d2 = DateTime.Parse(date);

            TimeSpan t = d1 - d2;
            double NrOfDays = t.TotalDays;

            int years = Convert.ToInt32(NrOfDays / 365);
            Console.WriteLine(years);

            Console.WriteLine(years + 10);
        }
    }
}
