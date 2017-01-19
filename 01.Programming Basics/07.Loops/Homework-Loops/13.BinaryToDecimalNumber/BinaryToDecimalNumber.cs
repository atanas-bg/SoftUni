using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _13.BinaryToDecimalNumber
{
    public class BinaryToDecimalNumber
    {
        public void Main()
        {
            //10101 = 1*2^0 + 0*2^1 + 1*2^2 + 0*2^3 + 1*2^4 = 21
            Console.WriteLine("Please enter an integer number in binary form: ");
            int[] number = int.Parse(Console.ReadLine());
            long decimalNumber = 0;
            
            for (int i = number.Length - 1; i >= 0; i--)
            {
                decimalNumber += number[i] * Math.Pow(2, i - 4);
            }
            Console.WriteLine(decimalNumber);
        }
    }
}
