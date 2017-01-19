using System;

namespace Problem03.Paths
{
    class main
    {
        static void Main()
        {
            Point3D p1 = new Point3D(5.4, 15.2, 3.5);
            Point3D p2 = new Point3D(7.9, 2.1, 5.9);
            Point3D p3 = new Point3D(23.4, 3.1, 5.2);
            Point3D p4 = new Point3D(7, 15.5, 57.7);

            Path3D listOfPoints = new Path3D();
            listOfPoints.Add(p1);
            listOfPoints.Add(p2);
            listOfPoints.Add(p3);
            listOfPoints.Add(p4);

            Console.WriteLine("Saving points to file...");
            Storage.SavePathToFile("../../path.txt", listOfPoints.ToString());
            Console.WriteLine("Load from file:\n" + Storage.LoadPathFromFile("../../path.txt"));
        }
    }
}
