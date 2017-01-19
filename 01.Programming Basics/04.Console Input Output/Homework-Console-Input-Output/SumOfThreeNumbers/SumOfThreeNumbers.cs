using System;


namespace SumOfThreeNumbers
{
    class SumOfThreeNumbers
    {
        static void Main(string[] args)
        {
            Console.Write("a=");
            double a = double.Parse(Console.ReadLine());
            Console.WriteLine();
            Console.Write("b=");
            double b = double.Parse(Console.ReadLine());
            Console.WriteLine();
            Console.Write("c=");
            double c = double.Parse(Console.ReadLine());
            Console.WriteLine();
            double sum = a + b + c;
            Console.WriteLine("{0,-10} {1,10} {2,20} {3,30}\n", "a", "b", "c", "sum");
            Console.WriteLine("{0,-10} {1,10} {2,20} {3,30}\n", a, b, c, sum);
        }
    }
}
