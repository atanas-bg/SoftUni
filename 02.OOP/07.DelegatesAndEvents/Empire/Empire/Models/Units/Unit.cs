using Empire.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Empire.Models.Units
{
    public abstract class Unit : IUnit
    {
        public Unit(int attackDamage, int health)
        {
            this.AttackDamage = attackDamage;
            this.Health = health;
        }
        public int AttackDamage { get; }

        public int Health { get; }
    }
}
