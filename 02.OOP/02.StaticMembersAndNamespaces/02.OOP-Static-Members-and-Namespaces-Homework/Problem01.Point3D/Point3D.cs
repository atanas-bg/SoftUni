using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem01.Point3D
{
    class Point3D
    {
        private double x;
        public double X
        {
            get { return x; }
            set { x = value; }
        }

        private double y;
        public double Y
        {
            get { return y; }
            set { y = value; }
        }

        private double z;
        public double Z
        {
            get { return z; }
            set { z = value; }
        }

        public Point3D(double x, double y, double z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }

        public override string ToString()
        {
            return string.Format("{0} {1} {2}", this.X, this.Y, this.Z);
        }

        public static readonly Point3D startPoint;
        static Point3D()
        {
            startPoint = new Point3D(0, 0, 0);
        }

        public static Point3D StartPoint
        {
            get { return startPoint; }
        }
    }
}
