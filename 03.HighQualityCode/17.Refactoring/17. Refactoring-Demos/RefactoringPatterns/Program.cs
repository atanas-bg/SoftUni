namespace RefactoringPatterns
{
    using System;

    class Program
    {
        static void Main(string[] args)
        {
            // 1
            var daysOfWeek = new[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

            // 2
            FindPointInCircle();

            // 3
            IsPrime(11);

            // 4
            string type = Console.ReadLine();
            Student student = null;

            if (type == "Online")
            {
                student = new Student(StudentType.Online);
            }
            else
            {
                student = new Student(StudentType.Onsite);
            }
        }

        private static bool IsPrime(int num)
        {
            bool isPrime = true;

            for (int i = 0; i <= Math.Sqrt(num); i++)
            {
                if (num % i == 0)
                {
                    isPrime = false;
                    break;
                }
            }

            return isPrime;
        }

        private static void FindPointInCircle()
        {
            // Rectangle coordinates and sides
            float rectangleX = 0,
                rectangleY = 0,
                rectangleWidth = 0,
                rectangleHeight = 0;

            // Circle coordinates
            float circleX = 0,
                circleY = 0,
                radius = 0;

            // Point coordinates
            float pointX = 0,
                pointY = 0;

            bool pointXIsInsideRectangle = pointX >= rectangleX &&
                pointX <= rectangleX + rectangleWidth;
            bool pointYIsInsideRectangle = pointY >= rectangleY &&
                pointY <= rectangleY + rectangleHeight;

            bool isPointInCircle = Math.Abs((circleX - pointX) * (circleX - pointX)
                              + (circleY - pointY) * (circleY - pointY)) <= radius * radius;

            if (pointXIsInsideRectangle &&
                pointYIsInsideRectangle &&
                isPointInCircle)
            {
                Console.WriteLine("Point is inside circle and rectangle.");
            }
        }
    }
}
