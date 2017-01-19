using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.ArrangeNumbers
{
    class ArrangeNumbers
    {
        static void Main()
        {
            string[] inputData = Console.ReadLine().Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);
            StringBuilder numberAsWords = new StringBuilder();
            SortedDictionary<string, List<string>> output = new SortedDictionary<string, List<string>>();
            StringBuilder result = new StringBuilder();
            
            for (int index = 0; index < inputData.Length; index++)
            {
                string currentNumber = inputData[index];
                for (int numberIndex = 0; numberIndex < currentNumber.Length; numberIndex++)
                {
                    string digit = currentNumber.Substring(numberIndex, 1);

                    digit = ReplaceDigit(digit);

                    if (numberAsWords.Length > 0)
                    {
                        numberAsWords.Append("-");
                        numberAsWords.Append(digit);
                    }
                    else
                    {
                        numberAsWords.Append(digit);
                    }
                }

                List<string> number = new List<string>();
                string key = numberAsWords.ToString();

                if (!output.ContainsKey(key))
                {
                    output[key] = new List<string>();
                }

                output[key].Add(currentNumber);
                numberAsWords.Clear();
            }

            foreach (var pair in output)
            {
                if (result.Length > 0)
                {
                    result.Append(", ");
                    result.Append(string.Join(", ", pair.Value));
                }
                else
                {
                    result.Append(string.Join(", ", pair.Value));
                }
            }

            Console.WriteLine(result.ToString());
        }

        private static string ReplaceDigit(string digit)
        {
            switch (digit)
            {
                case "0":
                    digit = "zero";
                    break;
                case "1":
                    digit = "one";
                    break;
                case "2":
                    digit = "two";
                    break;
                case "3":
                    digit = "three";
                    break;
                case "4":
                    digit = "four";
                    break;
                case "5":
                    digit = "five";
                    break;
                case "6":
                    digit = "six";
                    break;
                case "7":
                    digit = "seven";
                    break;
                case "8":
                    digit = "eight";
                    break;
                case "9":
                    digit = "nine";
                    break;
            }
            return digit;
        }
    }
}
