using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication6
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = "Hello";
            string b = " World!";
            string c = a + b;
            Console.WriteLine(a + b);
            Console.WriteLine(c[10]);
            Console.WriteLine(c[c.Length-4]);
            Console.WriteLine("Hello"[1]);
            Console.WriteLine(3.14 is double);
            Console.WriteLine(c[c.Length - 4] is char);


        }
    }
}
