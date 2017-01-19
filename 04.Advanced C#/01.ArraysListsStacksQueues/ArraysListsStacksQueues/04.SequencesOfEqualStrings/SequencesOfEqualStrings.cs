namespace _04.SequencesOfEqualStrings
{
    using System;
    using System.Collections.Generic;

    class SequencesOfEqualStrings
    {
        static void Main()
        {
            var input = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            int startIndex = 0;
            int endIndex;
            List<string> equalSequence = new List<string>();
            var maxIndex = input.Length - 1;

            for (int index = 0; index <= maxIndex; index++)
            {
                if (index == maxIndex || input[index] != input[index + 1])
                {
                    endIndex = index;
                    for (int i = startIndex; i <= endIndex; i++)
                    {
                        equalSequence.Add(input[index]);
                    }

                    startIndex = endIndex + 1;

                    Console.WriteLine(string.Join(" ", equalSequence));

                    equalSequence.Clear();
                }
            }
        }
    }
}
