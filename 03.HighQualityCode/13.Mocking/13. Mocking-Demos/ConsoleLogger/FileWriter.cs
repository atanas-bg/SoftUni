using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleLogger
{
    class FileWriter : IWriter
    {
        public void WriteLine(string message)
        {
            using (var streamWriter = new StreamWriter("file.txt"))
            {
                streamWriter.WriteLine(message);
                streamWriter.Close();
            }
        }
    }
}
