namespace BangaloreUniversityLearningSystem.Models
{
    using System;
    using System.Collections.Generic;

    public class Course
    {
        private const int MinCourseNameLength = 5;
        private string name;

        public Course(string name)
        {
            this.Name = name;
            this.Lectures = new HashSet<Lecture>();
            // Possible BugFix: Initialized list
            this.Students = new HashSet<User>();
        }

        public string Name
        {
            get { return this.name; }
            private set
            {
                if (string.IsNullOrEmpty(value) || value.Length < MinCourseNameLength)
                {
                    string message = string.Format(
                        "The course name must be at least {0} symbols long.", MinCourseNameLength);
                    throw new ArgumentException(message);
                }
                this.name = value;
            }
        }

        public ISet<Lecture> Lectures { get; set; }

        public ISet<User> Students { get; set; }

        public void AddLecture(Lecture lecture)
        {
            this.Lectures.Add(lecture);
        }

        public void AddStudent(User student)
        {
            this.Students.Add(student);
        }
    }
}