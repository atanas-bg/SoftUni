using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.PrintADeckOf52Cards
{
    class PrintADeckOf52Cards
    {
        static void Main()
        {
            for (int i = 2; i <= 14; i++)
            {
                switch (i)
                {
                    case 2:
                        Console.WriteLine("2\u2663 2\u2666 2\u2665 2\u2660");
                        break;
                    case 3:
                        Console.WriteLine("3\u2663 3\u2666 3\u2665 4\u2660");
                        break;
                    case 4:
                        Console.WriteLine("4\u2663 4\u2666 4\u2665 4\u2660");
                        break;
                    case 5:
                        Console.WriteLine("5\u2663 5\u2666 5\u2665 5\u2660");
                        break;
                    case 6:
                        Console.WriteLine("6\u2663 6\u2666 6\u2665 6\u2660");
                        break;
                    case 7:
                        Console.WriteLine("7\u2663 7\u2666 7\u2665 7\u2660");
                        break;
                    case 8:
                        Console.WriteLine("8\u2663 8\u2666 8\u2665 8\u2660");
                        break;
                    case 9:
                        Console.WriteLine("9\u2663 9\u2666 9\u2665 9\u2660");
                        break;
                    case 10:
                        Console.WriteLine("10\u2663 10\u2666 10\u2665 10\u2660");
                        break;
                    case 11:
                        Console.WriteLine("J\u2663 J\u2666 J\u2665 J\u2660");
                        break;
                    case 12:
                        Console.WriteLine("Q\u2663 Q\u2666 Q\u2665 Q\u2660");
                        break;
                    case 13:
                        Console.WriteLine("K\u2663 K\u2666 K\u2665 K\u2660");
                        break;
                    case 14:
                        Console.WriteLine("A\u2663 A\u2666 A\u2665 A\u2660");
                        break;
                }
            }
        }
    }
}
