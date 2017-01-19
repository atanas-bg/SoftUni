using System;
using SolidLogger.Interfaces;

namespace SolidLogger.Appenders
{
    public class ConsoleAppender : IAppender
    {
        public string Format { get; set; }

        public void Append(DateTime date, ReportLevel level, string message)
        {
            Console.WriteLine(this.Format, date, level, message);
        }
    }
}
