using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.EnterNumbers
{
    class EnterNumbers
    {
        private const int start = 1;
        private const int end = 100;
        private static List<int> numbers = new List<int>();

        static void Main(string[] args)
        {
            EnterTenNumbers();
            //int number = 1;
            //int input;
            //List<int> numbers = new List<int>();
            //Write a method ReadNumber(int start, int end) that enters an integer number in given range[start…end].
            //If an invalid number or non - number text is entered, the method should throw an exception.
            //Using this method write a program that enters 10 numbers: a1, a2, … a10, such that 1 < a1 < … < a10 < 100.
            //If the user enters an invalid number, let the user to enter again.

            //numbers.Add(number);
        }
        public static void AddList(int num)
        {
            numbers.Add(num);
        }
        public static void EnterTenNumbers()
        {
            int number = start;
            for (int i = 0; i < 10; i++)
            {
                try
                {
                    int input = ReadNumber(start, end);
                    while (number >= input)
                    {
                        Console.WriteLine("Enter bigger number then the previous one!");
                        input = ReadNumber(1, 100);
                    }
                    number = input;
                    AddList(number);
                }
                catch (FormatException)
                {
                    Console.WriteLine("Please enter a valid number.");
                    i--;
                }
                catch (OverflowException)
                {
                    Console.WriteLine("The number is out of the Integer type range.");
                    i--;
                }
                catch (ArgumentOutOfRangeException ex)
                {
                    Console.WriteLine(ex.Message);
                    i--;
                }
            }

        }

        public static int ReadNumber(int start, int end)
        {
            Console.Write("Enter a number between {0} and {1}: ", start, end);
            int inputNumber = int.Parse(Console.ReadLine());
            if (inputNumber <= start || inputNumber >= end)
            {
                throw new ArgumentOutOfRangeException("inputNumber", string.Format("The number is not in the range [" + start + "..." + end + "]"));
            }
            return inputNumber;
        }
    }
}

