namespace _03.FindMinMaxAverge
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using Microsoft.SqlServer.Server;

    class FindMinMaxAverge
    {
        static void Main()
        {
            var inputNumbers = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            var maxIndex = inputNumbers.Length;
            var intList = new List<int>();
            var doubleList = new List<double>();

            for (int currentIndex = 0; currentIndex < maxIndex; currentIndex++)
            {
                int intNumber;
                bool isInt = int.TryParse(
                       inputNumbers[currentIndex],
                       NumberStyles.Any,
                       CultureInfo.InvariantCulture,
                       out intNumber);

                if (isInt)
                {
                    intList.Add(intNumber);
                }
                else
                {
                    double doubleNumber;
                    bool isDouble = double.TryParse(
                        inputNumbers[currentIndex],
                        NumberStyles.Any,
                        CultureInfo.InvariantCulture,
                        out doubleNumber);
                    if (isDouble)
                    {
                        if (doubleNumber != (int)doubleNumber)
                        {
                            doubleList.Add(doubleNumber);
                        }
                        else
                        {
                            intList.Add((int)doubleNumber);
                        }
                    }
                }
            }
            
            string intResult = IntFormatResult(intList);
            string doubleResult = DoubleFormatResult(doubleList);

            Console.WriteLine(doubleResult);
            Console.WriteLine();
            Console.WriteLine(intResult);
        }

        private static string IntFormatResult(List<int> intList)
        {
            string outputIntList = string.Join(", ", intList);
            int minNumberIntList = intList.Min();
            int maxNumberIntList = intList.Max();
            int sumIntList = intList.Sum();
            double averageIntList = intList.Average();
            string intResult = string.Format("[{0}] -> min: {1}, max: {2}, sum: {3}, average: {4:F2}", outputIntList,
                minNumberIntList, maxNumberIntList, sumIntList, averageIntList);

            return intResult;
        }

        private static string DoubleFormatResult(List<double> doubleList)
        {
            string outputDoubleList = string.Join(", ", doubleList);
            double minNumberDoubleList = doubleList.Min();
            double maxNumberDoubleList = doubleList.Max();
            double sumDoubleList = doubleList.Sum();
            double averageDoubleList = doubleList.Average();
            string doubleResult = string.Format("[{0}] -> min: {1}, max: {2}, sum: {3}, average: {4:F2}", outputDoubleList,
                minNumberDoubleList, maxNumberDoubleList, sumDoubleList, averageDoubleList);

            return doubleResult;
        }
    }
}
