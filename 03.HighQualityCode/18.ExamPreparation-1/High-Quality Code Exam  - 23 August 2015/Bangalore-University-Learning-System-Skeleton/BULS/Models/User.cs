namespace BangaloreUniversityLearningSystem.Models
{
    using System;
    using System.Collections.Generic;
    using Utilities;

    public class User
    {
        private const int MinUsernameLength = 5;
        private const int MinPasswordLength = 6;
        private string username;
        private string password;

        public User(string username, string password, Role role)
        {
            this.UserName = username;
            this.Password = password;
            this.Role = role;
            this.Courses = new HashSet<Course>();
        }

        public string UserName
        {
            get { return this.username; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    string message = string.Format(
                        "The username must be at least {0} symbols long.", MinUsernameLength);
                    throw new ArgumentException(message);
                }

                if (value.Length < MinUsernameLength)
                {
                    string message = string.Format(
                        "The username must be at least {0} symbols long.", MinUsernameLength);
                    throw new ArgumentException(message);
                }

                this.username = value;
            }
        }

        public string Password
        {
            get { return this.password; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    string message = string.Format(
                        "The password must be at least {0} symbols long.", MinPasswordLength);
                    throw new ArgumentException(message);
                }

                if (value.Length < MinPasswordLength)
                {
                    string message = string.Format(
                        "The password must be at least {0} symbols long.", MinPasswordLength);
                    throw new ArgumentException(message);
                }

                string hashedPassword = HashUtilities
                .HashPassword(value);
                this.password = hashedPassword;
            }
        }

        public Role Role { get; private set; }

        public ISet<Course> Courses { get; private set; }

        public void EnrollInCourse(Course course)
        {
            this.Courses.Add(course);
        }
    }
}