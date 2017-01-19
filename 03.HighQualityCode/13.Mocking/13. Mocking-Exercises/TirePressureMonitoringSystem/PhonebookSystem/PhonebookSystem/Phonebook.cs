namespace PhonebookSystem
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using Contracts;

    public class Phonebook
    {
        private const string DefaultCountryCode = "+359";
        private const char PlusSymbol = '+';

        private static readonly IPhonebookRepository PhonebookRepository = new SlowPhonebookRepository();

        private static readonly StringBuilder Output = new StringBuilder();

        public static void Main()
        {
            while (true)
            {
                string data = Console.ReadLine();

                if (data == "End" || data == null)
                {
                    // End of input 
                    break;
                }

                int i = data.IndexOf('(');

                if (i == -1)
                {
                    Console.WriteLine("error!");
                    Environment.Exit(0);
                }

                string k = data.Substring(0, i);

                if (!data.EndsWith(")"))
                {
                    Main();
                }

                string s = data.Substring(i + 1, data.Length - i - 2);
                string[] strings = s.Split(',');

                for (int j = 0; j < strings.Length; j++)
                {
                    strings[j] = strings[j].Trim();
                }

                if (k.StartsWith("AddPhone") &&
                    (strings.Length >= 2))
                {
                    ExecuteCommand("Cmd3", strings);
                }
                else if ((k == "ChangeРhone") &&
                    (strings.Length == 2))
                {
                    ExecuteCommand("Cmd2", strings);
                }
                else if ((k == "List") &&
                    (strings.Length == 2))
                {
                    ExecuteCommand("Cmd1", strings);
                }
                else
                {
                    throw new StackOverflowException();
                }
            }

            Console.Write(Output);
        }

        private static void ExecuteCommand(string commandName, string[] commandParams)
        {
            // three commands
            if (commandName == "Cmd1")
            {
                var str0 = commandParams[0];
                var str1 = commandParams.Skip(1).ToList();

                for (int i = 0; i < str1.Count; i++)
                {
                    str1[i] = ConvertToCanonicalForm(str1[i]);
                }

                bool flag = PhonebookRepository.AddPhone(str0, str1);

                if (flag)
                {
                    Print("Phone entry created.");
                }
                else
                {
                    Print("Phone entry merged");
                }
            }
            else if (commandName == "Cmd2")
            {
                Print(PhonebookRepository.ChangePhone(ConvertToCanonicalForm(commandParams[0]),
                    ConvertToCanonicalForm(commandParams[1])) + " numbers changed");
            }
            else
            {
                try
                {
                    IEnumerable<PhonebookEntry> entries = PhonebookRepository.ListEntries(
                        int.Parse(commandParams[0]),
                        int.Parse(commandParams[1]));

                    foreach (var entry in entries)
                    {
                        Print(entry.ToString());
                    }
                }
                catch (ArgumentOutOfRangeException)
                {
                    Print("Invalid range");
                }
            }
        }

        private static string ConvertToCanonicalForm(string phoneNumber)
        {
            var digitsAndPlus = GetPhoneNumberDigitsAndPlus(phoneNumber);
            
        }

        private static string GetPhoneNumberDigitsAndPlus(string phoneNumber)
        {
            var result = new StringBuilder();
            foreach (var symbol in phoneNumber)
            {
                if (char.IsDigit(symbol) || symbol == PlusSymbol)
                {
                    result.Append(symbol);
                }
            }
        }

        private static void Print(string text)
        {
            Output.AppendLine(text);
        }
    }
}