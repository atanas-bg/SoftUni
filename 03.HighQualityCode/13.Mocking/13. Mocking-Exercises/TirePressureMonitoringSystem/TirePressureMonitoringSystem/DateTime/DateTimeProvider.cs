namespace DateTime
{
    using DateTime = System.DateTime;

    public class DateTimeProvider : IDateTimeProvider
    {
        public DateTime Now
        {
            get { return DateTime.Now; }
        }
    }
}
