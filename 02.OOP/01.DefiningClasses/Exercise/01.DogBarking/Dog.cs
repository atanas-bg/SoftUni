using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.DogBarking
{
    public class Dog
    {
        //private const string DefaultName = "Tom";
        public Dog () : this (null, null)
        {

        }
        public Dog (string name, string breed)
        {
            this.Name = name;
            this.Breed = breed;
        }
        public string Name { get; set; }
        public string Breed { get; set; }

        public void Bark()
        {
            Console.WriteLine("Kucheto {0} s poroda {1} kaza BAU!!!", this.Name ?? "bezimenen", this.Breed ?? "ulichna prevazhodna");
        }
    }
}
