using SolidLogger.Appenders;
using SolidLogger.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidLogger
{
    class Program
    {
        static void Main(string[] args)
        {
            IAppender appender = new FileAppender("file.txt");
            Logger logger = new Logger(appender);
            logger.Critical("Out of memory");
            logger.Info("Unused local variable 'name'");
        }
    }
}
