namespace DateTime.Tests
{
    using DateTime = System.DateTime;

    public interface IDateTimeProvider
    {
        DateTime Now
        {
            get;
        }
    }
}

