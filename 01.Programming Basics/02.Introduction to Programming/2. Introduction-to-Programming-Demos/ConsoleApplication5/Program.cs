using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication5
{
    class Program
    {
        static void Main(string[] args)
        {
            //00011001
            //00000001 <<6
            //01000000 ^
            //01011001
            //01000000 ~
            //10111111 
            //00011001 &
            //00011001 

            int pos = 6;
            int a = 25;
            Console.WriteLine(a ^ (1<<pos)); //промяна в противоположна стойност
            Console.WriteLine(a & ~(1<<pos));//промяна на знак на нула
            Console.WriteLine(a | (1<<pos )); //промяна на знак на 1
            Console.WriteLine(Convert.ToString(a,2).PadLeft(8,'0'));
        }
    }
}
