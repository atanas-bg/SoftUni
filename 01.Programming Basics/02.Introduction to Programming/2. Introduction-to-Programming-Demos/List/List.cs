using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List
{
    class List
    {
        static void Main()
        {
            List<int> numbers = new List<int> { 2, 3, 4, 5 };
            numbers.Add(4);
            numbers.Add(32423);
            numbers.Remove(4);
            numbers.Insert(1, 2000);
            //numbers.ForEach(c => Console.WriteLine(c));
            foreach (var item in numbers)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine(numbers.Count);
        }
    }
}
