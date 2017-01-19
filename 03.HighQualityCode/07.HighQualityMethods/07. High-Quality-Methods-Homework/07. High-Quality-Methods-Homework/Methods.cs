using System;

namespace Methods
{
    class Methods
    {
        static double CalcTriangleArea(double sideA, double sideB, double sideC)
        {
            if (sideA <= 0 || sideB <= 0 || sideC <= 0)
            {
                throw new ArgumentOutOfRangeException("Sides should be positive.", "CalctriangleArea");
               // Console.Error.WriteLine("Sides should be positive.");
                //return -1;
            }

            double semiperimeter = (sideA + sideB + sideC) / 2;
            double area = Math.Sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));
            return area;
        }

        static string NumberToDigit(int number)
        {
            switch (number)
            {
                case 0: { return "zero"; }
                case 1: { return "one"; }
                case 2: { return "two"; }
                case 3: { return "three"; }
                case 4: { return "four"; }
                case 5: { return "five"; }
                case 6: { return "six"; }
                case 7: { return "seven"; }
                case 8: { return "eight"; }
                case 9: { return "nine"; }
                default: { return "Invalid number!"; }
            }
        }

        static int FindMax(params int[] elements)
        {
            if (elements == null || elements.Length == 0)
            {
                throw new ArgumentNullException("The array can not be null or empty", "Find Max");
            }

            int firstElement = elements[0];

            for (int currentIndex = 1; currentIndex < elements.Length; currentIndex++)
            {
                if (elements[currentIndex] > firstElement)
                {
                    firstElement = elements[currentIndex];
                }
            }

            return firstElement;
        }

        static void PrintAsNumber(object number, string format)
        {
            if (format == "f")
            {
                Console.WriteLine("{0:f2}", number);
            }

            if (format == "%")
            {
                Console.WriteLine("{0:p0}", number);
            }

            if (format == "r")
            {
                Console.WriteLine("{0,8}", number);
            }
        }

        static double CalcDistance(double CoordinateX1, double CoordinateY1, double CoordinateX2, double CoordinateY2,
            out bool isHorizontal, out bool isVertical)
        {
            isHorizontal = (CoordinateY1 == CoordinateY2);
            isVertical = (CoordinateX1 == CoordinateX2);

            double distance = Math.Sqrt((CoordinateX2 - CoordinateX1) * (CoordinateX2 - CoordinateX1)
                + (CoordinateY2 - CoordinateY1) * (CoordinateY2 - CoordinateY1));

            return distance;
        }

        static void Main()
        {
            try
            {
                Console.WriteLine(CalcTriangleArea(3, 4, 5));

                Console.WriteLine(NumberToDigit(5));

                Console.WriteLine(FindMax(5, -1, 3, 2, 14, 2, 3));
                //Console.WriteLine(FindMax());

                PrintAsNumber(1.3, "f");
                PrintAsNumber(0.75, "%");
                PrintAsNumber(2.30, "r");

                bool horizontal, vertical;
                Console.WriteLine(CalcDistance(3, -1, 3, 2.5, out horizontal, out vertical));
                Console.WriteLine("Horizontal? " + horizontal);
                Console.WriteLine("Vertical? " + vertical);

                Student peter = new Student("Peter", "Ivanov", "From Sofia, born at 17.03.1992");
                Student stella = new Student("Stella", "Markova", "From Vidin, gamer, high results, born at 03.11.1993");
                Console.WriteLine("{0} older than {1} -> {2}",
                    peter.FirstName, stella.FirstName, peter.IsOlderThan(stella));
            }

            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex);
            }

            catch (ArgumentOutOfRangeException ar)
            {
                Console.WriteLine(ar);
            }
        }
    }
}
