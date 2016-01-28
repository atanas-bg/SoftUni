using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger.Interfaces
{
    public interface IAppender
    {
        void Append(DateTime date, ReportLevel report, string message);
    }
}
