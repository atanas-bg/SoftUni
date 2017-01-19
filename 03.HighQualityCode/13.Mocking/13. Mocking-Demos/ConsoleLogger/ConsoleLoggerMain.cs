namespace ConsoleLogger
{
    public class ConsoleLoggerMain
    {
        static void Main()
        {
            var consoleWriter = new FileWriter();
            var logger = new ConsolePrinter(consoleWriter);
            logger.Print("Invalid operation exception");
        }
    }
}
