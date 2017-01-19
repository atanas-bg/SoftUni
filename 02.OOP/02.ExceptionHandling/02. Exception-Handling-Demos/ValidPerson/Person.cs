using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidPerson
{
    class Person
    {
        private string firstName = null;
        private string lastName = null;
        private int age;

        public Person (string firstName, string lastName, int age)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Age = age;
        }
        public string FirstName
        {
            get
            {
                return this.firstName;
            }
            set
            {
               if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("value", "The first name cannot be null or empty!");
                }
                this.lastName = value;
            }
        }
        public string LastName
        {
            get
            {
                return this.lastName;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("value", "The last name cannot be null or empty!");
                }
            }
        }
        public int Age
        {
            get
            {
                return this.age;
            }
            set
            {
                if (value < 0 || value > 120)
                {
                    throw new ArgumentOutOfRangeException("value", "Ageshoul be in the range [0...120]");
                }
                this.age = value;
            }
        }
    }
}
