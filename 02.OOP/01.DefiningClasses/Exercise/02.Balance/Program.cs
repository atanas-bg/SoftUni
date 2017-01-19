using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Balance
{
    class Program
    {
        static void Main(string[] args)
        {
            CreateBalance Pesho = new CreateBalance ("Pesho", 500);
            Pesho.PrintBalance();
            //Console.WriteLine(CreateBalance.PersonCounter);
            CreateBalance.PrintCounter();
        }
    }
}
