using Empire.Contracts;
using Empire.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Empire.Models.Buildings
{
    public abstract class Building : IBuilding
    {
        private string unitType;
        private int unitCycleLength;
        private ResourceType resourceType;
        private int resourceCycleLength;
        private IUnitFactory unitFactory;
        private IResourceFactory resourceFactory;
        protected Building(string unitType,
            int unitCycleLength,
            ResourceType resourceType,
            int resourceCycleLength,
            IUnitFactory unitFactory,
            IResourceFactory resourceFactory)
        {
            this.unitType = unitType;
            this.unitCycleLength = unitCycleLength;
            this.resourceType = resourceType;
            this.resourceCycleLength = resourceCycleLength;
            this.unitFactory = unitFactory;
            this.resourceFactory = resourceFactory;

        }
        public bool CanProduceResource { get; }


        public bool CanProduceUnit { get; }

        public IResource ProduceResource()
        {
            throw new NotImplementedException();
        }

        public IUnit ProduceUnit()
        {
            throw new NotImplementedException();
        }

        public void Update()
        {
            throw new NotImplementedException();
        }
    }
}
