using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DateTime
{
    using System.Runtime.InteropServices;
    using DateTime = System.DateTime;

    class Program
    {
        static void Main(string[] args)
        {
            var time = new Time();
            IDateTimeProvider providedDate = new DateTimeProvider();
            var date = time.ShowDate(providedDate.Now);
            Console.WriteLine(date);
        }

    
    }
}
