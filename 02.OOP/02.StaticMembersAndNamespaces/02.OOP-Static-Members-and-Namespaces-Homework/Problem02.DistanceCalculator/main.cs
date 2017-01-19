using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem02.DistanceCalculator
{
    class main
    {
        static void Main()
        {
            Point3D p1 = new Point3D(5.4, 6.2, 3);
            Point3D p2 = new Point3D(7.9, 2.1, 5.9);

            Console.WriteLine(DistanceCalculator.DistCalc(p1,p2).ToString());
        }
    }
}
