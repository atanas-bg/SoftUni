namespace BangaloreUniversityLearningSystem.Data
{
    using System;
    using System.Collections.Generic;
    using Interfaces;

    public class Repository<T> : IRepository<T>
    {
        public List<T> items; //private !!!

        public Repository()
        {
            this.items = new List<T>();
        }

        //public List<T> Items
        //{
        //    get { return this.items; }
        //    set { this.items = value; }
        //} //Validation must be set

        public virtual IEnumerable<T> GetAll()
        {
            return this.items;
        }

        public virtual T Get(int id)
        {
            T item;

            try
            {
                item = this.items[id - 1];
            }
            catch (ArgumentOutOfRangeException)
            {
                item = default(T);
            }

            return item;
        }

        public virtual void Add(T user)
        {
            this.items.Add(user);
        }
    }
}