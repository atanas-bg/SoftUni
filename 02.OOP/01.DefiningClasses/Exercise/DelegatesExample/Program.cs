using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesExample
{
    

    class Program
    {
       
        static void Main(string[] args)
        {
            MyDelegate del = new MyDelegate(DelegatesExample.TestMethod);
            var print = new DelegatesExample();
            del += print.Print;
            del("Ivan");
           // del -= print.Print;
            //del("Pesho");
            int result = del("Pesho");
            Console.WriteLine(result);

            GenericDelegate<int> pr = MultiDelegates.PrintInt;
            pr(567);

        }
    }
}
