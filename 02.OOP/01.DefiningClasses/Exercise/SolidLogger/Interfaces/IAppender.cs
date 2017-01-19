

using System;

namespace SolidLogger.Interfaces
{
    public interface IAppender
    {
        string Format { get; set; }
        void Append(DateTime date, ReportLevel level, string message);
    }
}
