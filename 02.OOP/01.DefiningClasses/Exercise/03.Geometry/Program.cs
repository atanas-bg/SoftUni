using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Geometry
{
    class Program
    {
        static void Main(string[] args)
        {
            //Geometry.CalculateRectangleArea(5, 8);
            //Geometry.CalculateTriangleArea(23, 56.6);
            BitArray32 bits = new BitArray32(3);
            Console.WriteLine(bits.GetBitAtPos(3));
            bits.SetBitAtPos(3, 1);
            Console.WriteLine(bits.GetBitAtPos(3));
            Console.WriteLine(bits[4]);
            bits[4] = 1;
            Console.WriteLine(bits[4]);
            Console.WriteLine(bits.ToString());
        }
    }
}
