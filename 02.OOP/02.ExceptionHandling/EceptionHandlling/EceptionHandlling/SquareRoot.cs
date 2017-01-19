using EceptionHandlling;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EceptionHandling
{
    class SquareRoot
    {
        static void Main(string[] args)
        {
            //Write a program that reads an integer number and calculates and prints its square root.
            //If the number is invalid or negative, print "Invalid number".
            //In all cases finally print "Good bye".Use try-catch-finally.
            string consoleInput = Console.ReadLine();
            int number;
            try
            {
                number = int.Parse(consoleInput);
                PrintNumber(Sqrt(number));

            }
            catch (FormatException fe)
            {
                Console.WriteLine("Invalid number");
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine("Invalid number");
                //Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("Good bye");
            }
           
        }
        public static double Sqrt (int number)
        {
            if (number < 0)
            {
                throw new ArgumentOutOfRangeException("value", "The number cannot be negative!");
            }
            return Math.Sqrt(number);
        }
        public static void PrintNumber (double num)
        {
            Console.WriteLine("{0:F4}",num);
        }
    }
}
