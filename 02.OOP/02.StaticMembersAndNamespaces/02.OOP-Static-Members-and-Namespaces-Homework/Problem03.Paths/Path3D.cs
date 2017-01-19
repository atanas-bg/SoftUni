using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem03.Paths
{
    class Path3D
    {
        private List<Point3D> points = new List<Point3D>();
        public Path3D() { }

        public void Add(Point3D point)
        {
            points.Add(point);
        }
        public void Remove(Point3D point)
        {
            points.Remove(point);
        }
        public void Clear()
        {
            points.Clear();
        }


        public override string ToString()
        {
            StringBuilder res = new StringBuilder();
            foreach (Point3D point in points)
            {
                res.Append(string.Format("Point3d: {0} {1} {2}\n", point.X, point.Y, point.Z));
            }
            return res.ToString();
        }

        public void StoreInFile(string fileName)
        {
            StreamWriter writer;

            using (writer = new StreamWriter(fileName, false))
            {
                foreach (Point3D point in points)
                {
                    writer.WriteLine(string.Format("{0} {1} {2}", point.X, point.Y, point.Z));
                }
            }
        }

    }
}
