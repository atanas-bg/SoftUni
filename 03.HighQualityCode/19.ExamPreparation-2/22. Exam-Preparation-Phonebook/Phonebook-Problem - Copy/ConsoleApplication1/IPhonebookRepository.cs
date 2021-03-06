namespace ConsoleApplication1
{
    using System.Collections.Generic;
    using Problem_2;

    interface IPhonebookRepository
    {
        bool AddPhone(string name,
            IEnumerable<string> phoneNumbers);

        int ChangePhone(
            string oldPhoneNumber, string newPhoneNumber);

        Class1[] ListEntries(int startIndex, int count);
    }
}