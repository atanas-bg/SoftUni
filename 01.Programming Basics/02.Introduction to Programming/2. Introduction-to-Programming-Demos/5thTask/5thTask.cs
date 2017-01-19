using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.LongestWordInAText
{
    class LongestWordInAText
    {
        static void Main()
        {
            int number = int.Parse(Console.ReadLine());
            int frozenPos = int.Parse(Console.ReadLine());
            int times = int.Parse(Console.ReadLine());

            for (int i = 0; i < times; i++)
            {
                int firstBitValue = number & 1;
                int frozenBitValue = (number >> frozenPos) & 1;
                int skipBitPos = frozenPos != 18 ? frozenPos + 1 : 0;
                int skipBitValue = (number >> skipBitPos) & 1;
                number = number >> 1;
                if (frozenPos != 0)
                {
                    number |= firstBitValue;
                    number &= ~(3 << frozenPos - 1);
                    number |= frozenBitValue << frozenPos;
                    number |= skipBitValue << (frozenPos - 1);
                }
                else
                {
                    number &= ~(1);
                    number &= ~(1 << 18);
                    number |= frozenBitValue;
                    number |= skipBitValue << 18;
                }
            }
            Console.WriteLine(number);

        }
    }
}
