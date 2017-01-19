using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public enum DayOfWeek
    {
        Monday = 1, Tuesday = 2, Wednesday = 3, Thursday, Friday, Saturday, Sunday
    }
    class Program
    {
        static void Main(string[] args)
        {
            DayOfWeek day = DayOfWeek.Tuesday;
            Console.WriteLine((int)day);
            var date = new Date(day);
            Console.WriteLine(day);
        }
    }
    public class Date
    {
        public Date(DayOfWeek day)
        {
            this.DayOfWeek = day;
        }
        public DayOfWeek DayOfWeek { get; set; }
    }
}
