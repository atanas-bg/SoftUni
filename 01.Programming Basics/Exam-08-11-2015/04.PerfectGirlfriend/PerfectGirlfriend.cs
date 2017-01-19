using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.PerfectGirlfriend
{
    class PerfectGirlfriend
    {
        static void Main()
        {
            string input;
            int dayNumber = 0;
            int resultSum;
            int counter = 0;
            List<string> result = new List<string>();
            do
            {
                input = Console.ReadLine();
                if (input != "Enough dates!")
                {
                    string[] data = input.Split(new char[] { '\\' }, StringSplitOptions.RemoveEmptyEntries);
                    switch (data[0])
                    {
                        case "Monday":
                            dayNumber = 1;
                            break;
                        case "Tuesday":
                            dayNumber = 2;
                            break;
                        case "Wednesday":
                            dayNumber = 3;
                            break;
                        case "Thursday":
                            dayNumber = 4;
                            break;
                        case "Friday":
                            dayNumber = 5;
                            break;
                        case "Saturday":
                            dayNumber = 6;
                            break;
                        case "Sunday":
                            dayNumber = 7;
                            break;
                    }
                    int phoneSum = 0;
                    string phonenumber = data[1].ToString();
                    for (int i = 0; i < phonenumber.Length; i++)
                    {
                        phoneSum += int.Parse(phonenumber.Substring(i, 1));
                    }
                    int braSum = 0;
                    string braSize = data[2].ToString();
                    
                    int braNumber = int.Parse(braSize.Substring(0, braSize.Length - 1));

                    int braLetter = (int)char.Parse(braSize.Substring(braSize.Length-1, 1));
                    braSum = braNumber * braLetter;
                    string name = data[3].ToString();
                    int nameFirstLetter = (int)char.Parse(name.Substring(0, 1));
                    int nameSum = nameFirstLetter * name.Length;
                    resultSum = dayNumber + phoneSum + braSum - nameSum;
                    if (resultSum < 6000)
                    {
                        result.Add("Keep searching, " + name + " is not for you.");
                       
                    }
                    else if (resultSum >= 6000)
                    {
                        result.Add(name + " is perfect for you.");
                        counter += 1;
                    }
                }
                else
                {
                    foreach (string item in result)
                    {
                        Console.WriteLine(item);
                    }
                    Console.WriteLine(counter);
                }
            } while (input != "Enough dates!");
        }
    }
}
