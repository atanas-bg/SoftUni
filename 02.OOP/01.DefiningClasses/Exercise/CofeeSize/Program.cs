using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CofeeSize
{
    public enum CoffeeSize
    {
        Small = 100,
        Normal = 150,
        Double = 300
    }
    public class Coffee
    {
        public CoffeeSize size;
        public Coffee(CoffeeSize size)
        {
            this.size = size;
        }
        public CoffeeSize Size
        {
            get
            {
                return this.size;
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var normalCoffee = new Coffee(CoffeeSize.Normal);
            Console.WriteLine("Coffee {0} has {1} ml coffee.", normalCoffee.Size, (int)normalCoffee.Size);
            string str = "Normal";
            CoffeeSize coffeeSize = (CoffeeSize)Enum.Parse(typeof(CoffeeSize), str);
            Console.WriteLine(coffeeSize);
            int a = 5;
            int b = a;
            b++;
            Console.WriteLine(a);
            Console.WriteLine(b);
            var ivan = new Student();
            ivan.Age = 18;
            var Georgi = new Student();
            Georgi = ivan;
            Georgi.Age = 50;
            //ModifyStudent(ivan);
            Console.WriteLine(ivan.Age);
        }

        static void ModifyInt(int a)
        {
            ++a;
        
        }
        public class Student
        {
            public int Age{ get; set; }
        }
        static void ModifyStudent(Student student)
        {
            student.Age = 30;
        }
    }
}
