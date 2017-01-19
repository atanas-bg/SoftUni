using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.PlusRemove
{
    class PlusRemove
    {
        static void Main()
        {
            // Reads every line of text and adds it to a list
            string inputText = Console.ReadLine();
            List<char[]> allTextList = new List<char[]>();

            while (inputText != "END")
            {
                allTextList.Add(inputText.ToArray());

                inputText = Console.ReadLine();
            }

            // Creates a jagged array
            int rows = allTextList.Count;
            char[][] allTextArray = new char[rows][];

            for (int row = 0; row < rows; row++)
            {
                char[] charArray = allTextList[row];
                allTextArray[row] = charArray;
            }
            Dictionary<int, SortedSet<int>> plusCoordinates = new Dictionary<int, SortedSet<int>>();

            for (int row = 0; row < rows - 2; row++)
            {
                for (int column = 1; column < allTextArray[row].Length - 1; column++)
                {
                    char plusSymbol = allTextArray[row][column];
                    if (plusSymbol == allTextArray[row + 1][column - 1] &&
                        plusSymbol == allTextArray[row + 1][column] &&
                        plusSymbol == allTextArray[row + 1][column + 1] &&
                        plusSymbol == allTextArray[row + 2][column])
                    {
                        if (!plusCoordinates.ContainsKey(row))
                        {
                            plusCoordinates[row] = new SortedSet<int>();
                        }

                        if (!plusCoordinates.ContainsKey(row + 1))
                        {
                            plusCoordinates[row + 1] = new SortedSet<int>();
                        }

                        if (!plusCoordinates.ContainsKey(row + 2))
                        {
                            plusCoordinates[row + 2] = new SortedSet<int>();
                        }

                        plusCoordinates[row].Add(column);
                        plusCoordinates[row + 1].Add(column - 1);
                        plusCoordinates[row + 1].Add(column);
                        plusCoordinates[row + 1].Add(column + 1);
                        plusCoordinates[row + 2].Add(column);
                    }
                }

                StringBuilder output = new StringBuilder();
            }
        }
    }
}
