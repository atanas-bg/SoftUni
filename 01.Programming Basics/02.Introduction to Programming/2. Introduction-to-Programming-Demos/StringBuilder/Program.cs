using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace StringBuild
{
    class Program
    {
        static void Main(string[] args)
        {
            StringBuilder sentence = new StringBuilder();
            sentence.Append("Hello ");
            sentence.Append("World!");
            sentence.AppendFormat("{0}", 123);
            Console.WriteLine(sentence.ToString());
            string str = "Pesho is famous!";
            Console.WriteLine(str.IndexOf("is"));
            Console.WriteLine(str.Contains("is"));
            Console.WriteLine(str.IndexOf('f'));
            str.Replace("Pesho", "Gosho");
            Console.WriteLine(str.Replace("Pesho", "Gosho"));
            Console.WriteLine(str.Remove(12, 2));
            Console.WriteLine(str);
            string numbers = "123 43 5576 89";
            string[] num = numbers.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            //int[] nums = Array.ConvertAll(num, element => int.Parse(element));
            int[] nums = Array.ConvertAll(num, int.Parse);
            foreach (var item in nums)
            {
                Console.Write(item);
            }
            Console.WriteLine("\n");
            string[] names = { "Penka Momcheva", "Georgi Momchev", "Kolio Momchev" };
            Console.WriteLine(string.Join(" & ", names));
        }
    }
}
