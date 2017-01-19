using System;

namespace Methods
{
    class Student
    {
        private string firstName;
        private string lastName;
        private string studentInfo;

        public Student(string firstName, string lastName, string studentInfo)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.StudentInfo = studentInfo;
        }

        public string FirstName
        {
            get { return this.firstName; }
            
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("First name can not be null or white space.", "First Name");
                }
                this.firstName = value;
            }
        }
       
        public string LastName
        {
            get { return this.lastName; }

            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Last name can not be null or white space.", "Last Name");
                }
                this.lastName = value;
            }
        }

        public string StudentInfo
        {
            get { return this.studentInfo; }

            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Student Info can not be null or white space.", "Student Info");
                }
                this.studentInfo = value;
            }
        }

        public bool IsOlderThan(Student otherStudent)
        {
            string firstStudentBornDate = this.StudentInfo.Substring(this.StudentInfo.Length - 10);
            string secondStudentBornDate = otherStudent.StudentInfo.Substring(otherStudent.StudentInfo.Length - 10);
            DateTime firstDate = DateTime.Parse(firstStudentBornDate);
            DateTime secondDate = DateTime.Parse(secondStudentBornDate);
            bool isFirstStudentOlderThanSecond = firstDate < secondDate;
            
            return isFirstStudentOlderThanSecond;
        }
    }
}
