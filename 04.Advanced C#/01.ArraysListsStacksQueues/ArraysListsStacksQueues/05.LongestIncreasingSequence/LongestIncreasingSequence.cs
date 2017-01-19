namespace _05.LongestIncreasingSequence
{
    using System;
    //using System.CodeDom;
    using System.Collections.Generic;

    class LongestIncreasingSequence
    {
        static void Main()
        {
            var inputSequence = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            int[] intSequence = Array.ConvertAll(inputSequence, element => int.Parse(element));

            int maxIndex = intSequence.Length - 1;
            int startIndex = 0;
            int longestSequenceLength = 0;
            int longestSequenceIndex = 0;
            //var increasingSequencesList = new List<string>();
            var sequenceList = new List<int>();
            var longestSequence = new List<int>();

            for (int index = 0; index <= maxIndex; index++)
            {
                if (index == maxIndex || intSequence[index] >= intSequence[index + 1])
                {
                    int endIndex = index;

                    for (int i = startIndex; i <= endIndex; i++)
                    {
                        sequenceList.Add(intSequence[i]);
                    }

                    //increasingSequencesList.Add(string.Join(" ", sequenceList));
                    Console.WriteLine(string.Join(" ", sequenceList));

                    if (longestSequenceLength < sequenceList.Count)
                    {
                        longestSequenceLength = sequenceList.Count;
                        //var longestSequenceIndex = increasingSequencesList.Count - 1;
                        longestSequence.Clear();
                        longestSequence.AddRange(sequenceList);
                    }

                    startIndex = endIndex + 1;
                    sequenceList.Clear();
                }
            }

            //foreach (var sequence in increasingSequencesList)
            //{
            //    Console.WriteLine(sequence);
            //}

            //var longestSequence = increasingSequencesList[longestSequenceIndex];

            Console.WriteLine("Longest: {0}", string.Join(" ", longestSequence));
        }
    }
}
