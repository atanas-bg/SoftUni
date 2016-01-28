using Logger.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger.Appenders
{
    class FileAppender : Appender
    {
        private string file;

        public FileAppender(ILayout layout)
            : base(layout)
        {
        }

        public string File
        {
            get { return this.file; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("The file path can not be null or white space.");
                }
                this.file = value;
            }
        }

        public override void Append(DateTime date, ReportLevel report, string message)
        {
            if ((int)report >= (int)this.ReportLevel)
            {
                var streamWriter = new StreamWriter(this.File, true);
                var output = Layout.Format(date, report, message);
                streamWriter.WriteLine(output);
                streamWriter.Close();
            }
        }
    }
}
