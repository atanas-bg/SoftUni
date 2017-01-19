using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Person
{
    class StaticMembers
    {
        static class sqrtPrecalculated
        {
            public const int MaxValue = 10000;
            private static int[] sqrtValues;
            static sqrtPrecalculated()
            {
                sqrtValues = new int[MaxValue + 1];
                for (int i = 0; i < sqrtValues.Length; i++)
                {
                    sqrtValues[i] = (int)Math.Sqrt(i);
                }
            }
            public static int GetSqrt(int value)
            {
                return sqrtValues[value];
            }
        }
        class SqrtTest
        {
            static void Main()
            {
                Console.WriteLine(sqrtPrecalculated.GetSqrt(254));
                //Result = 15
            }
        }
    }
}
