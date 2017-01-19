using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new Client();
            client.Name = "Gosho";
            client.Age = 25;
            var printer = new Printer();
            printer.Print(client, new JsonFormatter());
        }
    }
}
