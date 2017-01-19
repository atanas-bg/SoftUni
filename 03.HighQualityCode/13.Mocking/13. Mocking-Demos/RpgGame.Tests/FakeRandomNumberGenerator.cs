using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RpgGame.Tests
{
   public class FakeRandomNumberGenerator : IRandomNumberGenerator
    {
        public int GetRandomNumber(int min, int max)
        {
            return 0;
        }
    }
}
