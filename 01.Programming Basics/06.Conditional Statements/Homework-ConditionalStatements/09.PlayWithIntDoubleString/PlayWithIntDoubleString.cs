using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.PlayWithIntDoubleString
{
    class PlayWithIntDoubleString
    {
        static void Main()
        {
            try
            {
                Console.WriteLine("Please choose a type: \n1 --> int\n2 --> double\n3 --> string");
                byte digit = byte.Parse(Console.ReadLine());
                switch (digit)
                {
                    case 1:
                        Console.Write("Please enter an integer: ");
                        int intNumber = int.Parse(Console.ReadLine());
                        Console.WriteLine(intNumber + 1);
                        break;
                    case 2:
                        Console.Write("Please enter a double: ");
                        double doubleNumber = double.Parse(Console.ReadLine());
                        Console.WriteLine(doubleNumber + 1);
                        break;
                    case 3:
                        Console.Write("Please enter a string: ");
                        string text = Console.ReadLine();
                        Console.WriteLine(text + "*");
                        break;

                    default:
                        {
                            Console.WriteLine("Not a valid choice");
                            break;
                        }
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid number!");
            }
        }
    }
}
