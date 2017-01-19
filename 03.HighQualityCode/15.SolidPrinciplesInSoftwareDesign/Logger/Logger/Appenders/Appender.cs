using Logger.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger.Appenders
{
    public abstract class Appender : IAppender
    {
        private ReportLevel reportLevel;

        public Appender(ILayout layout)
        {
            this.Layout = layout;
        }

        public ReportLevel ReportLevel
        {
            get { return this.reportLevel; }
            set
            {
                if (!Enum.IsDefined(typeof(ReportLevel), value))
                {
                    throw new ArgumentException("Report level is not defined properly.");
                }
                this.reportLevel = value;
            }
        }

        internal ILayout Layout { get; set; }

        public abstract void Append(DateTime date, ReportLevel report, string message);
    }
}
