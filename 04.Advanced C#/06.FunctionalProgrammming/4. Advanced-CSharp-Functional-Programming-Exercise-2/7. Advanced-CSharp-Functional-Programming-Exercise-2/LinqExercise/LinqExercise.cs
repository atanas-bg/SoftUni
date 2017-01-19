namespace LinqExercise
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Runtime.InteropServices;
    using System.Text;

    public class LinqExercise
    {
        public static void Main()
        {
            const string FilePath = @"../../Students-data.txt";

            List<Student> students = new List<Student>();

            StreamReader reader = new StreamReader(FilePath);
            string data = reader.ReadLine();

            while (data != null)
            {
                
                string[] tokens = data.Split();

                int id = int.Parse(tokens[0]);
                string firstName = tokens[1];
                string lastName = tokens[2];
                string email = tokens[3];
                string gender = tokens[4];
                string studentType = tokens[5];
                int examResult = int.Parse(tokens[6]);
                int homeworksSent = int.Parse(tokens[7]);
                int homeworksEvaluated = int.Parse(tokens[8]);
                double teamworkScore = double.Parse(tokens[9]);
                int attendancesCount = int.Parse(tokens[10]);
                double bonus = double.Parse(tokens[11]);

                students.Add(new Student(
                    id,
                    firstName,
                    lastName,
                    email,
                    gender,
                    studentType,
                    examResult,
                    homeworksSent,
                    homeworksEvaluated,
                    teamworkScore,
                    attendancesCount,
                    bonus));

                data = reader.ReadLine();
            }

            var maleStudents = students.Where(student =>
            student.Gender == "Male");
            StringBuilder outputMaleStudents = new StringBuilder();
            foreach (var student in maleStudents)
            {
                string output = string.Format("{0} - Male", student);
                outputMaleStudents.AppendLine(output);
            }

            var studentsWhichNamesStartWithA = students.Where(student => student.FirstName.StartsWith("A"));
            foreach (var student in studentsWhichNamesStartWithA)
            {
                Console.WriteLine(student);
            }


        }
    }
}
