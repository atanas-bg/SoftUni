using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Laptop
{

    class Laptop
    {
        private int hdd;

        public Laptop(int hdd)
        {
            this.Hdd = hdd;
        }
        public int Hdd { get; set; }
        protected bool Equals(Laptop other)
        {
            return Hdd == other.Hdd;
        }
        public static Laptop operator +(Laptop l1, Laptop l2)
        {
            return new Laptop(l1.Hdd + l2.Hdd);
        }
        public static Laptop operator -(Laptop l1, Laptop l2)
        {
            return new Laptop(l1.Hdd - l2.Hdd);
        }
        public static bool operator ==(Laptop l1, Laptop l2)
        {
            return l1.Equals(l2);
        }
        public static bool operator !=(Laptop l1, Laptop l2)
        {
            return l1 == l2;
        }
    }





    class Program
    {
        static void Main(string[] args)
        {
            Laptop lenovo = new Laptop(256);
            Laptop toshiba = new Laptop(512);
            Laptop pravetz = lenovo + toshiba;
            Console.WriteLine(pravetz.Hdd);
        }
    }
}
