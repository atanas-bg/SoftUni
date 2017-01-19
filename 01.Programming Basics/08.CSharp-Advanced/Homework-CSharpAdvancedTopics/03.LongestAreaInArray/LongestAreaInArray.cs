using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.LongestAreaInArray
{
    class LongestAreaInArray
    {
        static void Main()
        {
            Console.Write("How many strings do You want to enter: ");
            int stringsCount;
            while (!int.TryParse(Console.ReadLine(), out stringsCount))
            {
                Console.Write("Please enter an integer number: ");
            }
            if (stringsCount > 0)
            {
                string[] strings = new string[stringsCount];
                for (int i = 0; i < stringsCount; i++)
                {
                    Console.Write("Please enter string {0}: ", i + 1);
                    strings[i] = Console.ReadLine();
                }
                int counter = 0;
                List<int> counterList = new List<int>();
                for (int i = 0; i < strings.Length; i++)
                {
                    for (int p = i; p < strings.Length; p++)
                    {
                        
                        if (strings[i] == strings[p])
                        {
                            counter++;
                            if (p==(strings.Length-1))
                            {
                                counterList.Add(counter);
                                counter = 0;
                                break;
                            }
                        }
                        else
                        {
                            counterList.Add(counter);
                            counter = 0;
                            break;
                        }

                    }
                }
                
                int max = counterList.Max();
                Console.WriteLine(max);
                for (int i = 0; i < counterList.Count; i++)
                {
                    if (max == counterList[i])
                    {
                        ArraySegment<string> segment = new ArraySegment<string> (strings,i,max);

                        foreach (string item in segment)
                        {
                            Console.WriteLine(item);
                        }
                        break;
                    }
                }
            }
            else
            {
                Console.WriteLine("Not a positive number!");
            }
        }
    }
}
