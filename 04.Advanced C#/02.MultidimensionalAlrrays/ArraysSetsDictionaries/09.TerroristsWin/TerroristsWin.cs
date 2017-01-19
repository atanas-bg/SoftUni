using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.TerroristsWin
{
    class TerroristsWin
    {
        static void Main()
        {
            // prepare|yo|dong
            string inputText = Console.ReadLine();
            int bombStartIndex = 0;
            int bombEndIndex = 0;
            int currentIndex = 0;
            int bombSum = 0;
            int explosionRange = 0;
            StringBuilder clearedArea = new StringBuilder(inputText);

            while (currentIndex < inputText.Length)
            {
                bombStartIndex = inputText.IndexOf('|', currentIndex);

                if (bombStartIndex != -1)
                {
                    bombEndIndex = inputText.IndexOf('|', bombStartIndex + 1);

                    if (bombEndIndex == -1)
                    {
                        break;
                    }
                }
                else
                {
                    break;
                }

                for (int i = bombStartIndex + 1; i < bombEndIndex; i++)
                {
                    bombSum += inputText[i];
                }

                explosionRange = bombSum % 10;
                int explosionStartIndex = bombStartIndex - explosionRange;
                int explosionEndIndex = bombEndIndex + explosionRange;

                if (explosionStartIndex < 0)
                {
                    explosionStartIndex = 0;
                }

                if (explosionEndIndex >= clearedArea.Length)
                {
                    explosionEndIndex = clearedArea.Length - 1;
                }

                for (int i = explosionStartIndex; i <= explosionEndIndex; i++)
                {
                    clearedArea[i] = '.';
                }

                currentIndex = bombEndIndex + 1;
                bombSum = 0;
            }

            Console.WriteLine(clearedArea.ToString());
        }
    }
}
