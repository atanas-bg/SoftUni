using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Geometry
{
    class BitArray32
    {
        private int num;
        public BitArray32(int num)
        {
            this.num = num;
        }
        public int GetBitAtPos(int pos)
        {
            if (pos < 0 || pos > 31)
            {
                throw new ArgumentOutOfRangeException("Position should be in range [0...31]");
            }
            return (this.num >> pos) & 1;
        }
        public void SetBitAtPos(int pos, int bit)
        {
            if (pos < 0 || pos > 31)
            {
                throw new ArgumentOutOfRangeException("Position should be in range [0...31]");
            }
            if (bit != 0 && bit != 1)
            {
                throw new ArgumentOutOfRangeException("Bit should be 0 or 1");
            }
            this.num &= ~(1 << pos);
            this.num = this.num | (bit << pos);
        }
        public int this[int pos]
        {
            get
            {
                return this.GetBitAtPos(pos);
            }
            set
            {
                this.SetBitAtPos(pos, value);
            }
        }
        public override string ToString()
        {
            return this.num.ToString();
        }
    }
}
