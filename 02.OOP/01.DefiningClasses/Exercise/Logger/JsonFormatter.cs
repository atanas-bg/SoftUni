
namespace Logger
{
    public class JsonFormatter : IFormatter
    {
        public string Format(Client client)
        {
            return string.Format("{{ \"name\": {0}, \"age\": {1} }}", client.Name, client.Age);
        }
    }
}
