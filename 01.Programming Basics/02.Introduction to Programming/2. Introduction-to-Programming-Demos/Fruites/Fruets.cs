using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fruites
{
    class Fruets
    {
        static void Main()
        {
            Dictionary<string, decimal> prices = new Dictionary<string, decimal>()
            {
                {"banana",1.80M },
                {"cucumber",2.75M },
                {"tomato",3.20M },
                {"orange",1.60M },
                {"apple",0.86M }
            };
            decimal[] quantity = new decimal[3];
            string[] products = new string[3];
            string dayOfWeek = Console.ReadLine();
            decimal sumOfAll = 0;
            for (int i = 0; i < quantity.Length; i++)
            {
                quantity[i] = decimal.Parse(Console.ReadLine());
                products[i] = Console.ReadLine();
            }
            if (dayOfWeek == "Friday" || dayOfWeek == "Sunday")
            {
                List<string> prod = prices.Keys.ToList();
                int discount = dayOfWeek == "Friday" ? 10 : 5;
                foreach (string key in prod)
                {
                    prices[key] -= prices[key] * discount / 100;
                }
            }
            else if (dayOfWeek == "Tuesday")
            {
                prices["banana"] -= prices["banana"] * 20 / 100;
                prices["orange"] -= prices["orange"] * 20 / 100;
                prices["apple"] -= prices["apple"] * 20 / 100;
            }
            else if (dayOfWeek == "Wednesday")
            {
                prices["cucumber"] -= prices["cucumber"] * 10 / 100;
                prices["tomato"] -= prices["tomato"] * 10 / 100;
            }
            else if (dayOfWeek == "Thursday")
            {
                prices["banana"] -= prices["banana"] * 30 / 100;
            }
            
            for (int i = 0; i < quantity.Length; i++)
            {
                sumOfAll += quantity[i] * prices[products[i]];
            }
            Console.WriteLine("{0:F2}",sumOfAll);
        }
    }
}
