using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication3
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            //int a = rnd.Next(0, 100);
            // Console.WriteLine(a);
            // Console.WriteLine(a % 2 == 0);
            int[] arr = new int[100];
            for (int i = 0; i < 100; i++)
            {
                arr[i] = rnd.Next();
            }

            for (int i = 0; i < 100; i++)
            {
                if (arr[i] % 7 == 0 && arr[i] % 3 == 0)
                {
                    Console.WriteLine(arr[i]);
                }

            }
        }
    }
}
