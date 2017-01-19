namespace _02.SortArrayWithSelectionSort
{
    using System;

    class SortArrayWithSelectionSort
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

            SelectionSort(intArray);

            Console.WriteLine(string.Join(" ", intArray));
        }

        public static void SelectionSort(int[] array)
        {
            var maxIndex = array.Length;

            for (int currentIndex = 0; currentIndex < maxIndex - 1; currentIndex++)
            {
                for (int i = currentIndex + 1; i < maxIndex; i++)
                {
                    if (array[currentIndex] > array[i])
                    {
                        var oldValue = array[currentIndex];
                        array[currentIndex] = array[i];
                        array[i] = oldValue;
                    }
                }
            }
        }
    }
}
