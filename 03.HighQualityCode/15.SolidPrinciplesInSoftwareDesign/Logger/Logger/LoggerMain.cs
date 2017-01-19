using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger.Appenders;
using Logger.Layouts;
using Logger.Interfaces;

namespace Logger
{
    class LoggerMain
    {
        static void Main()
        {
            //ILayout xmLayout = new XmlLayout();
            //FileAppender fileAppender =
            //     new FileAppender(xmLayout);
            //ILogger logger = new Logger(fileAppender);
            //fileAppender.File = "log.txt";
            //fileAppender.ReportLevel = ReportLevel.Error;

            ILayout simpleLayout = new SimpleLayout();
            ConsoleAppender consoleAppender =
                 new ConsoleAppender(simpleLayout);
            ILogger logger = new Logger(consoleAppender);
            consoleAppender.ReportLevel = ReportLevel.Error;

            try
            {
                logger.Info("Everything seems fine");
                logger.Warn("Warning: ping is too high - disconnect imminent");
                logger.Error("Error parsing request");
                logger.Critical("No connection string found in App.config");
                logger.Fatal("mscorlib.dll does not respond");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
         }
    }
}
