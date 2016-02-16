namespace _06.SubsetSums
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class SubsetSums
    {
        static void Main()
        {
            int numberN = int.Parse(Console.ReadLine());
            int[] inputIntArray = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .Distinct()
                .ToArray();
            int inputIntArrayLength = inputIntArray.Length;
            int masksCount = 1 << inputIntArrayLength;
            var numbersList = new List<int>();
            bool noSubsetsExist = true;

            for (int currentMask = 0; currentMask < masksCount; currentMask++)
            {
                for (int index = 0; index < inputIntArrayLength; index++)
                {
                    if ((currentMask & (1 << index)) > 0)
                    {
                        numbersList.Add(inputIntArray[inputIntArrayLength - index - 1]);
                    }
                }

                numbersList.Reverse();
                if (numbersList.Count > 0 && numbersList.Sum() == numberN)
                {
                    Console.WriteLine("{0} = {1}", string.Join(" + ", numbersList), numberN);
                    noSubsetsExist = false;
                }

                numbersList.Clear();
            }

            if (noSubsetsExist)
            {
                Console.WriteLine("No matching subsets.");
            }
        }
    }
}
