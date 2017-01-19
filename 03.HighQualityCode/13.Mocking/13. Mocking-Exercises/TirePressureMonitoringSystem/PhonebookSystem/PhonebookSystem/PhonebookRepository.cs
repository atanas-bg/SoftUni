namespace PhonebookSystem
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Contracts;
    using Wintellect.PowerCollections;

    public class PhonebookRepository : IPhonebookRepository
    {
        private OrderedSet<PhonebookEntry> sorted = new OrderedSet<PhonebookEntry>();

        private Dictionary<string, PhonebookEntry> dictionary = new Dictionary<string, PhonebookEntry>();

        private MultiDictionary<string, PhonebookEntry> multiDictionary = new MultiDictionary<string, PhonebookEntry>(false);

        public bool AddPhone(string name, IEnumerable<string> phoneNumbers)
        {
            string name2 = name.ToLowerInvariant();
            PhonebookEntry entry;
            bool flag = !this.dictionary.TryGetValue(name2, out entry);

            if (flag)
            {
                entry = new PhonebookEntry();
                entry.Name = name;
                this.dictionary.Add(name2, entry);
                this.sorted.Add(entry);
            }

            foreach (var number in phoneNumbers)
            {
                this.multiDictionary.Add(number, entry);
            }

            entry.PhonebookNumbers.UnionWith(phoneNumbers);

            return flag;
        }

        public int ChangePhone(string oldPhoneNumber, string newPhoneNumber)
        {
            var found = this.multiDictionary[oldPhoneNumber].ToList();

            foreach (var entry in found)
            {
                entry.PhonebookNumbers.Remove(oldPhoneNumber);
                this.multiDictionary.Remove(oldPhoneNumber, entry);
                entry.PhonebookNumbers.Add(newPhoneNumber);
                this.multiDictionary.Add(newPhoneNumber, entry);
            }

            return found.Count;
        }

        public PhonebookEntry[] ListEntries(int startIndex, int count)
        {
            if (startIndex < 0 ||
                startIndex + count > this.dictionary.Count)
            {
                Console.WriteLine("Invalid start index or count.");

                return null;
            }

            PhonebookEntry[] list = new PhonebookEntry[count];

            for (int i = startIndex; i <= startIndex + count - 1; i++)
            {
                PhonebookEntry entry = this.sorted[i];
                list[i - startIndex] = entry;
            }

            return list;
        }
    }
}