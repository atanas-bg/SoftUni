using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger.Interfaces;

namespace Logger.Layouts
{
    public class SimpleLayout : ILayout
    {
        public string Format(DateTime date, ReportLevel level, string message)
        {
            return string.Format("{0} - {1} - {2}", date, level, message);
        }
    }
}
