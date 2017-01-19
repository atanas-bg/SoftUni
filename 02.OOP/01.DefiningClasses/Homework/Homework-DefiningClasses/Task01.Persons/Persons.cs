using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task01.Persons
{
    class Persons
    {
        static void Main(string[] args)
        {
            Person gosho = new Person("Gosho", 24, "gosho@abv.bg");
            Person nasko = new Person("Nasko", 45);

            try
            {
                Console.WriteLine(gosho.ToString());
                Console.WriteLine(nasko.ToString());
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
