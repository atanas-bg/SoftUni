using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger.Interfaces;

namespace Logger.Layouts
{
    class XmlLayout : ILayout
    {
        public string Format(DateTime date, ReportLevel level, string message)
        {
            var output = string.Format(
                "<log>\n" +
                "<date>{0}</date>\n" +
                "<level>{1}</date>\n" +
                "<message>{2}</message>\n" +
                "</log>",
                date, level, message);

            return output;
        }
    }
}
