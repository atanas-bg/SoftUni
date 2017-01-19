using System;


namespace CirclePerimeterAndArea
{
    class CirclePerimeterAndArea
    {
        static void Main(string[] args)
        {
            Console.Write("r=");
            int r = int.Parse(Console.ReadLine());
            Console.WriteLine();
            double pi = Math.PI;
            double p = 2 * r * pi;
            double s = pi * r * r;
            Console.WriteLine("P={0:F2}",p);
            Console.WriteLine("S={0:F2}",s);
        }
    }
}
