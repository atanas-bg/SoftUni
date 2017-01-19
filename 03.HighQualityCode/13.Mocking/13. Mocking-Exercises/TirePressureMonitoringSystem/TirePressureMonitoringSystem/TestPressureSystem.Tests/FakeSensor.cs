using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestPressureSystem.Tests
{
    class FakeSensor : ICheckable
    {
        private double checkedPressure;

        public FakeSensor(double checkedPressure)
        {
            this.CheckedPressure = checkedPressure;
        }

        public double CheckedPressure
        {
            get { return this.checkedPressure; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The pressure can not be negative");
                }

                this.checkedPressure = value;
            }

        }

        public double PopNextPressurePsiValue()
        {
            return this.CheckedPressure;
        }
    }
}
