using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Empire.Models.Units
{
    class SwordsMan : Unit
    {
        private const int SwordsManAttackDamage = 13;
        private const int SwordsManHealth = 40;
        public SwordsMan() : base(SwordsManAttackDamage, SwordsManHealth)
        {
        }
    }
}
