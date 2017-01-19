using System;

namespace _02.Balance
{
    class CreateBalance
    {
        private string name;
        private decimal balance;
        public static int instanceCounter;
        static CreateBalance()
        {
            instanceCounter = 0;
        }
        public CreateBalance(string name, decimal balance)
        {
            this.Name = name;
            this.Balance = balance;
            instanceCounter++;
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
        public decimal Balance
        {
            get
            {
                return this.balance;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("The number cannot be negative!");
                }
                this.balance = value;
            }
        }

        public static int PersonCounter
        {
            get
            {
                return CreateBalance.instanceCounter;
            }
        }

        public void PrintBalance()
        {
            Console.WriteLine("{0} {1}", this.Name, this.Balance);
        }
        public static void PrintCounter()
        {
            Console.WriteLine(CreateBalance.PersonCounter);
        }
    }
}

