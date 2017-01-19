namespace ConsoleLogger
{
    using System;

    public class ConsolePrinter
    {
        private IWriter writer;

        public ConsolePrinter(IWriter writer)
        {
            this.writer = writer;
        }

        public void Print(string message)
        {
             this.writer.WriteLine(message);
        }
    }
}
