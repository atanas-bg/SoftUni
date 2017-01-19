using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RpgGame
{
    class RandomNumberGenerator : IRandomNumberGenerator
    {
        private Random random;

        public RandomNumberGenerator()
        {
            random = new Random();
        }

        public int GetRandomNumber(int min, int max)
        {
            return random.Next(min, max + 1);
        }
    }
}
