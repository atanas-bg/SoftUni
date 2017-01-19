using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TernarenOperator
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("Въведете положително число или нула: ");
            int input = int.Parse(Console.ReadLine());
            a = input >= 0 ? input : 0;
            Console.WriteLine(a);
        }
    }
}
