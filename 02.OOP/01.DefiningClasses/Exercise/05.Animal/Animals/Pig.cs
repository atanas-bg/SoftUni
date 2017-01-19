using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Animal.Animals
{
    public class Pig : Animal
    {
        private int health;
        public Pig()
        {
            this.Health = 100;
        }
        public override int Health
        {
            get
            {
                return this.health;
            }

            protected set
            {
                if (value <= 200)
                {
                    this.health = value;
                }
                else
                {
                    this.health = 200;
                }
            }
        }
        public override void ProduceSound()
        {
            Console.WriteLine("Gruh gruh");
        }
        public override void Eat(IEdible edible)
        {
            this.Health += edible.HealthBonus;
        }
    }
}
