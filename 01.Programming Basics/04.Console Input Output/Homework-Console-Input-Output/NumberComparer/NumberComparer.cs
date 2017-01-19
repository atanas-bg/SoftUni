using System;


namespace NumberComparer
{
    class NumberComparer
    {
        static void Main(string[] args)
        {
            Console.Write("a=");
            double a = double.Parse(Console.ReadLine());
            Console.WriteLine();
            Console.Write("b=");
            double b = double.Parse(Console.ReadLine());
            Console.WriteLine();
            Console.WriteLine("The bigger number is:" + Math.Max(a, b));
        }
    }
}
