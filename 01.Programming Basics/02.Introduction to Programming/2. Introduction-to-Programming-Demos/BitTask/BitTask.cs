using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BitTask
{
    class BitTask
    {
        static void Main()
        {
            long[] numbers = Console.ReadLine().Split().Select(long.Parse).ToArray();
            for (int i = 0; i < numbers.Length; i = i + 2)
            {
                for (int bitPos = 0; bitPos < 64; bitPos += 2)
                {
                    long firstNumBit = numbers[i] & ((long)1 << bitPos);
                    long secondNumBit = numbers[i + 1] & ((long)1 << bitPos);
                    if (firstNumBit != secondNumBit)
                    {
                        numbers[i] ^= (long)1 << bitPos;
                        numbers[i + 1] ^= (long)1 << bitPos;
                    }
                }
                numbers[i] = ~numbers[i];
                numbers[i + 1] = ~numbers[i + 1];
                numbers[i] &= ~(1 << 63);
                numbers[i + 1] &= ~(1 << 63);
                Console.WriteLine((ulong)numbers[i] + " " + Convert.ToString(numbers[i],2).PadLeft(63,'0');
                Console.WriteLine((ulong)numbers[i+1] + " " + Convert.ToString(numbers[i+1], 2).PadLeft(63,'0');
            }
            
        }
    }
}
