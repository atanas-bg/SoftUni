using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Animal.Food
{
    public class Steak : IEdible
    {
 
        public int HealthBonus
        {
            get
            {
                return 100;
            }
        }

        public string Type
        {
            get
            {
                return "Meat";
            }
        }
    }
}
