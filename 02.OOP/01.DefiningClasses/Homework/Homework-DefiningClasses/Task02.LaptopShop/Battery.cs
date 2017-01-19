using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02
{
    using System.ComponentModel;

    public class Battery
    {
        private string description;
        private double life;

        public Battery(string description)
        {
            this.Description = description;
        }

        public Battery(string description, double life)
            : this(description)
        {
            this.Life = life;
        }

        public string Description
        {
            get { return this.description; }
            set
            {
                if (string.IsNullOrEmpty(value) || string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Description", "The description can not be white space,  null or empty.");
                }
                this.description = value;
            }
        }

        public double Life
        {
            get { return this.life; }
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentOutOfRangeException("Battery life", "The battery life must be a positive number.");
                }
                this.life = value;
            }
        }
    }
}
