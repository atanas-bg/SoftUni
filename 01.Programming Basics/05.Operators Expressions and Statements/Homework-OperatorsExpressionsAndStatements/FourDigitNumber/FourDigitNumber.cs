using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FourDigitNumber
{
    class FourDigitNumber
    {
        static void Main(string[] args)
        {
            Console.Write("Ener a four-digit-number: ");
            try
            {

                int number = int.Parse(Console.ReadLine());
                if (number > 999 && number < 10000)
                {
                    int digit4 = number % 10;
                    int num1 = number / 10;
                    int digit3 = num1 % 10;
                    int num2 = num1 / 10;
                    int digit2 = num2 % 10;
                    int digit1 = num2 / 10;
                    int sum = digit1 + digit2 + digit3 + digit4;
                    Console.WriteLine("Sum of digits: " + sum);
                    Console.WriteLine("Digits in reverse order: {0}{1}{2}{3}",digit4,digit3,digit2,digit1);
                    Console.WriteLine("Last digit in first position: {0}{1}{2}{3}", digit4, digit1, digit2, digit3);
                    Console.WriteLine("Exchange the second and the third digit: {0}{1}{2}{3}", digit1, digit3, digit2, digit4);
                }
                else
                {
                    Console.WriteLine("Invalid Number!");
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid number!");
            }
        }
    }
}
