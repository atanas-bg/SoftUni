using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoftuniNumerals
{
    using System.Text.RegularExpressions;

    class SoftuniNumerals
    {
        static void Main()
        {
            //aba - 1
            //cdc - 4
            //bcc - 2
            //aa - 0
            //cc - 3
            string inputData = Console.ReadLine();

            inputData = Regex.Replace(inputData, "cdc", "4");
            inputData = Regex.Replace(inputData, "aba", "1");
            inputData = Regex.Replace(inputData, "bcc", "2");
            inputData = Regex.Replace(inputData, "cc", "3");
            inputData = Regex.Replace(inputData, "aa", "0");

            decimal result = 0;
            for (int i = inputData.Length - 1, p = 0; i >= 0; i--, p++)
            {
                int digit = int.Parse(inputData.Substring(i, 1));
                decimal num = 1;
                int numericSystem = 5;

                for (int j = 1; j <= p; j++)
                {
                    num *= numericSystem;
                }

                result += digit * num;
            }

            Console.WriteLine(result);
        }
    }
}
