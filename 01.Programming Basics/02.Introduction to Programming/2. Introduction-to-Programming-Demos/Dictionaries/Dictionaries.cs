using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dictionaries
{
    class Dictionaries
    {
        static void Main(string[] args)
        {
            Dictionary<string, double> prices = new Dictionary<string, double>()
            {
                {"Патладжан", 6.52 },
                {"Пипер", 2.08 },
            };
            prices.Add("Чушки", 5.50);
            prices.Add("Домати", 4.60);
            prices.Add("Краставици", 2.55);
            Console.WriteLine("{0:0.00}",prices["Чушки"]);
            prices["Чушки"] += prices["Чушки"] * 20 / 100.0;
            Console.WriteLine(prices["Чушки"]);
            prices["Чушки"] = 2.25;
            Console.WriteLine(prices["Чушки"]);
            foreach (var item in prices)
            {
                Console.WriteLine(item);
            }
        }
    }
}
