namespace BangaloreUniversityLearningSystem.Interfaces
{
    using Data;
    using Models;
    using Interfaces;

    public interface IBangaloreUniversityData
    {
        UsersRepository Users { get; }

        IRepository<Course> Courses { get; }
    }
}