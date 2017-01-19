using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.BasicMarkUpLanguage
{
    
    using System.Text.RegularExpressions;

    class BasicMarkUpLanguage
    {
        const string inverse = "inverse";
        const string reverse = "reverse";
        const string repeat = "repeat";

        static void Main()
        {
            string inputTag = Console.ReadLine();
            StringBuilder output = new StringBuilder();
            int lineNumber = 0;
            bool isFull = false;

            while (inputTag != "<stop/>")
            {
                ++lineNumber;
                string stopPattern = @"^(?:\s*<\s*)(\w+)(?:\s*\/\s*>)";
                Regex stopRegex = new Regex(stopPattern);
                if (stopRegex.IsMatch(inputTag))
                {
                    break;
                }

                string pattern = @"^\s*<\s*(\w+)\s+(?:value)*\s*(?:=\s*""\s*)*(\w+)*(?:\s*""\s*)*content\s*=\s*""\s*(\w+)""";
                Regex regex = new Regex(pattern);
                Match matches = regex.Match(inputTag);
                string command = matches.Groups[1].Value;
                string content = matches.Groups[3].Value;
                int value = 0;
                int number = 0;
                if (int.TryParse(matches.Groups[2].Value, out number))
                {
                    value = number;
                }

                if (content.Length > 0)
                {
                    isFull = true;
                    string startLine = string.Format("{0}. ", lineNumber);
                    output.Append(startLine);
                    
                    switch (command)
                    {
                        case inverse:
                            for (int index = 0; index < content.Length; index++)
                            {
                                if (char.IsLower(content[index]))
                                {
                                    output.Append(char.ToUpper(content[index]));
                                }
                                else
                                {
                                    output.Append(char.ToLower(content[index]));
                                }
                            }

                            output.AppendLine();
                            break;
                        case reverse:
                            for (int index = content.Length - 1; index >= 0; index--)
                            {
                                output.Append(content[index]);
                            }

                            output.AppendLine();
                            break;
                        case repeat:
                            for (int line = 0; line < value; line++)
                            {
                                if (line != value - 1)
                                {
                                    output.Append(content);
                                    ++lineNumber;
                                    output.AppendLine();
                                    startLine = string.Format("{0}. ", lineNumber);
                                    output.Append(startLine);
                                }
                                else
                                {
                                    output.Append(content);
                                }
                            }

                            output.AppendLine();
                            break;
                    }
                }

                inputTag = Console.ReadLine();
            }

            if (isFull)
            {
                Console.WriteLine(output.ToString().TrimEnd('\n'));
            }
            
        }
    }
}
