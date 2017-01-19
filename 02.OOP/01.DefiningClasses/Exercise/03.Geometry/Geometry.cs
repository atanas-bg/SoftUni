using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Geometry
{
    public static class Geometry
    {
        public static double CalculateTriangleArea(double a, double ha)
        {
            return (a * ha) / 2;
        }
        public static double CalculateRectangleArea(double a, double b)
        {
            return a*b;
        }
    }
}
