using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.DifferenceBetweenDates
{
    class DifferenceBetweenDates
    {
        static void Main()
        {
            string dateFormat = "dd.MM.yyyy";
            DateTime firstDate;
            DateTime secondDate;
            Console.Write("Please enter the first date: ");
            while (!DateTime.TryParseExact(Console.ReadLine(), dateFormat, null, System.Globalization.DateTimeStyles.None, out firstDate))
            {
                Console.Write("Please enter a correct date in the format dd.MM.yyyy: ");
            }
            Console.Write("Please enter the second date: ");
            while (!DateTime.TryParseExact(Console.ReadLine(), dateFormat, null, System.Globalization.DateTimeStyles.None, out secondDate))
            {
                Console.Write("Please enter a correct date in the format dd.MM.yyyy: ");
            }
            Console.WriteLine((secondDate - firstDate).Days);
        }
    }
}
