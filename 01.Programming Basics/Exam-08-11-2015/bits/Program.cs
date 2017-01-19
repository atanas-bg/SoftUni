using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bits
{
    class Program
    {
        static void Main()
        {
            uint firstNumber = uint.Parse(Console.ReadLine());
            uint secondNumber = uint.Parse(Console.ReadLine());
            string f = Convert.ToString(firstNumber, 2).PadLeft(32, '0');
            string s = Convert.ToString(secondNumber, 2).PadLeft(32, '0');
            char[] first = f.ToArray();
            char[] second = s.ToArray();
            char[] number = new char[64];
            if (firstNumber > secondNumber)
            {
                for (int i = 0; i < 32; i++)
                {
                    number[2 * i] = first[i];
                    number[2 * i + 1] = second[i];
                }
            }
            else 
            {
                for (int i = 0; i < 31; i = i + 2)
                {
                    number[2 * i] = first[i];
                    number[2 * i + 1] = first[i + 1];
                    number[2 * i + 2] = second[i];
                    number[2 * i + 3] = second[i + 1];
                }
            }
            
            string res = new string(number);
            long result = Convert.ToInt64(res, 2);
            Console.WriteLine(result);

        }
    }
}
