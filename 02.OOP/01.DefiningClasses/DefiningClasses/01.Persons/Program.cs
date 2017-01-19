using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Persons
{
    class Program
    {
        static void Main(string[] args)
        {
            Person boss = new Person("Ivan", 45);
            Person employee = new Person("Georgi", 25, "georgi@gmail.com");
            Console.WriteLine(boss);
            Console.WriteLine(employee);

            //List persons = new List(){
            //        new Person("The Academic Guy", 29),
            //        new Person("Me", 29, "notarealaddress@abv.bg"),
            //        new Person("Vitya", 29, "notarealaddress@yahoo.com"),
            //        new Person("Noname",99, "notarealaddress@yahoo.com"),
            //    };
            //persons.ForEach(myPerson => Console.WriteLine(myPerson.ToString()));
        }
    }
}
