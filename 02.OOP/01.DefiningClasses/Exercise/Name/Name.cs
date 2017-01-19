using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Name
{
    public class Human
    {
        public const string DefaultName = "Pesho";
        public readonly string Name;
        public Human(string name)
        {
            this.Name = name;
        }

        public Human()
        {
            this.Name = DefaultName;
        }
    }
    class Name
    {
        static void Main()
        {
            Human a = new Human();
            Console.WriteLine(a.Name);
            Human b = new Human("Ivan");
            Console.WriteLine(b.Name);
        }
    }
}
