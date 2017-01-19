using SolidLogger.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidLogger
{
    class Logger
    {
        public Logger(IAppender appender)
        {
            this.Appender = appender;
        }
        public IAppender Appender { get; set; }
        public void Info(string msg)
        {
            this.Log(ReportLevel.Info, msg);
        }
        public void Warn(string msg)
        {
            this.Log(ReportLevel.Warn, msg);
        }
        public void Error(string msg)
        {
            this.Log(ReportLevel.Error, msg);
        }
        public void Critical(string msg)
        {
            this.Log(ReportLevel.Critical, msg);
        }
        public void Fatal(string msg)
        {
            this.Log(ReportLevel.Fatal, msg);
        }
        private void Log(ReportLevel level, string msg)
        {
            var date = DateTime.Now;
            //Console.WriteLine("{0} - {1} - {2}", date, level, msg);
            this.Appender.Format = "{0} - {1} - {2}";
            this.Appender.Append(date, level, msg); 
        }
    }
}
