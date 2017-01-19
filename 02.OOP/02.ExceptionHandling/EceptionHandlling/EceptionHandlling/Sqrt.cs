using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EceptionHandlling
{
    class Sqrt
    {
        private int number;
        public Sqrt ( int num)
        {
            this.Number = num;
        }
        public int Number
        {
            get
            {
                return this.number;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("value", "The number cannot be negative!");
                }
                this.number = value;
            }
        }
        public double ReturnSqrt ()
        {
            return Math.Sqrt(this.Number);
        }
    }
}
