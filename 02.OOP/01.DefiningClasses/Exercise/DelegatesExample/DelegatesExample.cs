using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesExample
{
    public delegate int MyDelegate(string param);
    public class DelegatesExample
    {
        

        public static int TestMethod(string param)
        {
            Console.WriteLine("I was called by a delegate.");
            Console.WriteLine("I got parameter: {0}.", param);
            return 1;
        }

        public int Print(string param)
        {
            Console.WriteLine(param);
            return 2;
        }
    }
    public delegate void GenericDelegate<T>(T param);

    public class MultiDelegates
    {
        public static void PrintInt(int a)
        {
            Console.WriteLine(a);
        }

        public static void PrintDelegatesExample(DelegatesExample del)
        {
            Console.WriteLine(del);
        }
    }
}
