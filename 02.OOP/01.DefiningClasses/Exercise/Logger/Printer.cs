

namespace Logger
{
    public class Printer
    {
        public void Print (Client client, IFormatter formatter)
        {
            var result = formatter.Format(client);
            System.Console.WriteLine(result);
        }
    }
}
