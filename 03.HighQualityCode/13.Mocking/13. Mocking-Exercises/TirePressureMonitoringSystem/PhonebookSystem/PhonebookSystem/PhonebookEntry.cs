namespace PhonebookSystem
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class PhonebookEntry : IComparable<PhonebookEntry>
    {
        private string name;
        private string name2;

        public PhonebookEntry()
        {
            this.PhonebookNumbers = new SortedSet<string>();
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            set
            {
                this.name = value;
            }
        }

        public SortedSet<string> PhonebookNumbers { get; private set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append('[');
            sb.Append(this.Name);
            bool flag = true;

            foreach (var phone in this.PhonebookNumbers)
            {
                if (flag)
                {
                    sb.Append(": ");
                    flag = false;
                }
                else
                {
                    sb.Append(", ");
                }

                sb.Append(phone);
            }

            sb.Append(']');

            return sb.ToString();
        }

        public int CompareTo(PhonebookEntry other)
        {
            return string.Compare(this.name, other.name, StringComparison.InvariantCulture);
        }
    }
}