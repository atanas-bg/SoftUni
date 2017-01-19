using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BiggerNumber
{
    class BiggerNumber
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter two integer numbers, each on a separate line:");
            int biggernum = int.Parse(Console.ReadLine());
            int smallernum = int.Parse(Console.ReadLine());
            if (smallernum > biggernum)
            {
                biggernum = smallernum;
            }
            Console.WriteLine("The grater number is: {0}", biggernum);
        }
    }
}
