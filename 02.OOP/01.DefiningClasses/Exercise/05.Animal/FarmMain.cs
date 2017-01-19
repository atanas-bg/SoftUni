using _05.Animal.Food;
using _05.Animal.Animals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Animal
{
    class FarmMain
    {
        static void Main(string[] args)
        {
            IEdible steak = new Steak();
            IEdible peach = new Peach();
            Animal pig = new Pig();
            Bunny bunny = new Bunny();
            bunny.Eat(peach);
            Console.WriteLine(bunny.Health);
            pig.Eat(bunny);
            pig.Eat(bunny);
            pig.Eat(bunny);
            Console.WriteLine(pig.Health);
            bunny.ProduceSound();
            pig.ProduceSound();
        }
    }
}
