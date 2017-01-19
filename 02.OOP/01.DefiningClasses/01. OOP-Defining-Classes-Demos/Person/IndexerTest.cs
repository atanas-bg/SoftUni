using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IndexerTest
{
    class Data
    {
        private string[] data;
        public Data(int count)
        {
            this.data = new string[count];
        }

        public string this[int index]
        {
            get { return this.data[index]; }
            set { this.data[index] = value; }
        }
        public string this[char index]
        {
            get { return this.data[index]; }
            set { this.data[index] = value; }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Data d = new Data(90);
            d[67] = "Pesho";
            Console.WriteLine(d[0]);
            Console.WriteLine(d[67]);
            Console.WriteLine(d['C']);
            d['C'] = "Petko";
            Console.WriteLine(d[67]);
        }
    }
}
