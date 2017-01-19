using System;


namespace ConsoleApplication8
{
    class Program
    {
        static void Main()
        {
            Console.Write("Please enter a positive integer: ");
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            //int i = 1;
            //while (i <= n)
            while (n >= 1 && n % 2 == 1)
            {
                sum += n;
                n-=2;
            }
            Console.WriteLine("The sum is " + sum);
        }
    }
}
