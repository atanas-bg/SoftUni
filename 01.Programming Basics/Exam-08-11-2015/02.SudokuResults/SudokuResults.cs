using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.SudokuResults
{
    class SudokuResults
    {
        static void Main()
        {
            //•	The time will always be in the format “[mm]:[ss]” with leading zeros if it’s necessary.
            //•	The input lines will be in the range: [1… 100].
            //•	The minutes will be a valid integer in the range: [00… 99].
            //•	The seconds will be a valid integer in the range: [00… 59]. 
            //•	{ Gold, Silver or Bronze} Star
            //•	“Games – {count of games} \ Average seconds – {average seconds}”.
            //            •	When the average time is lower than 720 seconds - give a Gold Star
            //•	When the average time is between 720 and 1440 seconds – give a Silver Star
            //•	When the average time is higher than 1440 seconds – give a Bronze Star

            string input;
            string[] time;
            int seconds, minutes, allseconds = 0;
            int counter = 0;
            string star = null;
            do
            {
                input = Console.ReadLine();
                if (input != "Quit")
                {
                    time = input.Split(new char[] { ':' }).ToArray();
                    minutes = int.Parse(time[0]);
                    seconds = int.Parse(time[1]);
                    allseconds += minutes * 60 + seconds;
                    counter += 1;
                }
            } while (input != "Quit");
            double averageScore = (double)allseconds / (double)counter;
            double roundedScore = Math.Ceiling(averageScore);
            if (roundedScore < 720)
            {
                star = "Gold";
            }
            else if (roundedScore >= 720 && roundedScore <= 1440)
            {
                star = "Silver";
            }
            else if (roundedScore > 1440)
            {
                star = "Bronze";
            }
            Console.WriteLine("{0} Star", star);
            
            Console.WriteLine("Games - {0} \\ Average seconds - {1}", counter, roundedScore);
        }
    }
}
