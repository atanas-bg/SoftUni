using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Animal
{
    public abstract class Animal
    {
        public virtual int Health { get; protected set; }

        public abstract void Eat(IEdible edible);

        public virtual void ProduceSound()
        {
            Console.WriteLine("Skm Skm");
        }

    }
}
