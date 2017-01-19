namespace ArraysListsStacksQueues
{
    using System;

    class SortArrayOfNumbers
    {
        static void Main()
        {
            var inputStringArray = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            var maxIndex = inputStringArray.Length;
            var intArray = new int[maxIndex];

            for (int currentIndex = 0; currentIndex < maxIndex; currentIndex++)
            {
                intArray[currentIndex] = int.Parse(inputStringArray[currentIndex]);
            }

            Array.Sort(intArray);

            Console.WriteLine(string.Join(" ", intArray));
        }
    }
}
