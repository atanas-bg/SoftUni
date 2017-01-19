using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SolidLogger.Interfaces;
using System.IO;

namespace SolidLogger.Appenders
{
    public class FileAppender : IAppender
    {
        public FileAppender(string path)
        {
            this.Path = path;
        }
        public string Path { get; set; }
        public string Format { get; set; }

        public void Append(DateTime date, ReportLevel level, string message)
        {
            StreamWriter writer = new StreamWriter(this.Path, true);
            writer.WriteLine(this.Format, date, level, message);
            writer.Close();
        }
    }
}
