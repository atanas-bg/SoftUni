using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task01.Persons
{
    class Person
    {
        private string name;
        private int age;
        private string email;

        public Person(string name, int age, string email)
        {
            this.Name = name;
            this.Age = age;
            this.Email = email;
        }

        public Person(string name, int age)
            : this(name, age, null)
        {
        }

        public string Name
        {
            get { return this.name; }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name", "The name should not be null or empty.");
                }
                this.name = value;
            }
        }

        public int Age
        {
            get { return this.age; }
            set
            {
                if (string.IsNullOrEmpty(value.ToString()) || value < 1 || value > 100)
                {
                    throw new ArgumentException("Age", "The age should not be null or empty value and it should be between 1 and 100.");
                }
                this.age = value;
            }
        }

        public string Email
        {
            get { return this.email; }
            set
            {
                if (value != null && !value.Contains("@"))
                {
                    throw new ArgumentException("Email", "The email should not be empty value and it should contains symbol \"@\".");
                }
                this.email = value;
            }
        }

        public override string ToString()
        {
            return string.Format("{0} is {1} years old. His email is {2}.", 
                this.Name, this.Age, this.Email ?? "[No email]");
        }
    }
}