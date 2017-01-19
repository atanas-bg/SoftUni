using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Animal.Animals
{
    class Bunny : Animal, IEdible
    {
        public Bunny()
        {
            this.Health = 50;
        }

        public int HealthBonus
        {
            get
            {
                return this.Health;
            }
        }

        public string Type
        {
            get
            {
                return "Meat";
            }
        }

        public override void Eat(IEdible edible)
        {
            if (edible.Type != "Meat")
            {
                this.Health += edible.HealthBonus / 2;
            }
            
        }
    }
}
