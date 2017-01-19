using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events
{
    using System.Text.RegularExpressions;

    class Events
    {
        static void Main()
        {
            int numberOfEvents = int.Parse(Console.ReadLine());
            string eventPattern = @"(?:#)([A-Z]*[a-z]*)(?::) (?:@)([A-Z]*[a-z]*) ([0-23]+)(?::)([0-59]+)";
            //string personPattern = @"(?:#)([A-Z]*[a-z]*)(?::)";
            //string locationPattern = @"(?:@)([A-Z]*[a-z]*)";
            //string hourPattern = @"([0-23]+)(?::)";
            //string minutesPattern = @"(?::)([0-59]+)";
            int parametersNumber = 2;
            string[] time = new string[parametersNumber];
            SortedDictionary<string, string[]> personInfo = new SortedDictionary<string, string[]>();
            SortedDictionary<string, SortedDictionary<string, string[]>> eventInfo = 
                new SortedDictionary<string, SortedDictionary<string, string[]>>();

            for (int currentEvent = 0; currentEvent < numberOfEvents; currentEvent++)
            {
                string input = Console.ReadLine();
                bool isMatch = Regex.IsMatch(input, eventPattern);
                
                if (isMatch)
                {
                    Match match = Regex.Match(input, eventPattern);
                    string personName = match.Groups[1].Value;
                    string town = match.Groups[2].Value;
                    time[0] = match.Groups[3].Value;
                    time[1] = match.Groups[4].Value;
                    personInfo.Add(town, time);
                    eventInfo.Add(personName, personInfo);
                }
            }

            string[] locations = Console.ReadLine().Split(',');
            Array.Sort(locations);

            for (int index = 0; index < locations.Length; index++)
            {
                foreach (KeyValuePair<string, SortedDictionary<string, string[]>> in eventInfo)
                {
                    
                }
             }
        }
    }
}
