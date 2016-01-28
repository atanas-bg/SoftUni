using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger.Interfaces;

namespace Logger.Appenders
{
    class ConsoleAppender : Appender
    {
        public ConsoleAppender(ILayout layout)
            : base(layout)
        {
        }

        public override void Append(DateTime date, ReportLevel report, string message)
        {
            if ((int)report >= (int)ReportLevel)
            {
                string output = Layout.Format(date, report, message);
                Console.WriteLine(output);
            }
        }
    }
}
