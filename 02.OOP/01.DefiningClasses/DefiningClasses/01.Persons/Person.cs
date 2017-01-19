using System;
using System.Linq;

class Person
{
    private string name;
    private int age;
    private string email;

    public Person(string name, int age, string email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }


    public Person(string name, int age) : this(name, age, null)
    {
        this.name = name;
        this.age = age;
    }


    public string Name
    {
        get { return this.name; }
        set
        {
            if (string.IsNullOrEmpty(value))
            {
                throw new ArgumentException("Invalid name!");
            }
                this.name = value;

        }
    }

    public int Age
    {
        get { return this.age; }
        set
        {
            if (value < 1 || value > 100)
            {
                throw new ArgumentException("Invalid age!");
            }
            this.age = value;
        }
    }

    public string Email
    {
        get { return this.email; }
        set
        {
            if (value !=null && (value.Length == 0 || !value.Contains("@")))
            {
                throw new ArgumentException("Invalid email!");
            }

            this.email = value;
        }
    }

    public override string ToString()
    {
        return "Person: " + this.name + ", " + this.age + ", " + (string.IsNullOrEmpty(this.email) ? this.email : "");
    }
}

