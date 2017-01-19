

namespace Logger
{
    class XMLFormatter : IFormatter
    {
        public string Format(Client client)
        {
            return string.Format("<name>{0}</name>, <age>{1}</age>", client.Name, client.Age);
        }
    }
}
