using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Person
{
    public class Person
    {
        private static int instanceCounter = 0;
        public static int PersonCounter
        {
            get
            {
                return Person.instanceCounter;
            }
        }
        public string Name { get; set; }
        public Person (string name = null)
        {
            Person.instanceCounter++;
            this.Name = name;
        }
    }
}
