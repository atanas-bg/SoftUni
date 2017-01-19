using System;

namespace Problem01.Point3D
{
    class main
    {
        static void Main()
        {
            Point3D p1 = new Point3D(5.4, 6.2, 3);
            Point3D p2 = new Point3D(7.9, 2.1, 5.9);
            Point3D p3 = new Point3D(23.4, 3, 5);
            Point3D p4 = new Point3D(7, 15.5, 57.7);

            Console.WriteLine("StartPoint: {0}", Point3D.StartPoint);
            Console.WriteLine("p1: {0}", p1);
            Console.WriteLine("p2: {0}", p2);
            Console.WriteLine("p3: {0}", p3);
            Console.WriteLine("p4: {0}", p4);
        }
    }
}
