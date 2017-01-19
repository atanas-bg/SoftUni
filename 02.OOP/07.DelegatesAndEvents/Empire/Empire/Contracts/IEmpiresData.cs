

using Empire.Enums;
using System.Collections;
using System.Collections.Generic;

namespace Empire.Contracts
{
    public interface IEmpiresData
    {
        IEnumerable<IBuilding> Buildings { get; }
        void AddBuilding(IBuilding building);
        IEnumerable<IUnit> Units { get; }
        void AddUnits(IUnit unit);
        IDictionary<ResourceType, int> Resources {get;}
}
}
