namespace DateTime
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

