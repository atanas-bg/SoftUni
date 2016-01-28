using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger.Interfaces;

namespace Logger
{
    class Logger : ILogger
    {
        public Logger(IAppender appender)
        {
            this.Appender = appender;
        }

        private IAppender Appender { get; set; }

        public void Info(string message)
        {
            this.Log(message, ReportLevel.Info);
        }

        public void Warn(string message)
        {
            this.Log(message, ReportLevel.Warn);
        }

        public void Error(string message)
        {
            this.Log(message, ReportLevel.Error);
        }

        public void Critical(string message)
        {
            this.Log(message, ReportLevel.Critical);
        }

        public void Fatal(string message)
        {
            this.Log(message, ReportLevel.Fatal);
        }

        private void Log(string message, ReportLevel report)
        {
            var date = DateTime.Now;
            this.Appender.Append(date, report, message);
        }
    }
}
