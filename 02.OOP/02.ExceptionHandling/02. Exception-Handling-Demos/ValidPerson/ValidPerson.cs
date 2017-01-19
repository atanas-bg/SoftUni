using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidPerson
{
    class ValidPerson
    {
        static void Main(string[] args)
        {
            try
            {
                Person First = new Person("Ivan", "Petrov", 23);
                Console.WriteLine("{0} {1} - {2}", First.FirstName, First.LastName, First.Age);
                Person Second = new Person(string.Empty, "Kolev", 45);
                Console.WriteLine("{0} {1} - {2}", Second.FirstName, Second.LastName, Second.Age);
                Person Third = new Person("Georgi", null, 45);
                Person Fourth = new Person("Georgi", "Kolev", -45);
                Person Fifth = new Person("Penka", "Koleva", 130);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine("Exception thrown: {0}", ex.Message);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine("Exception thrown: {0)", ex.Message);
            }
        }
    }
}
