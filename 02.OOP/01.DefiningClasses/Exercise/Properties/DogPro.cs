using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties
{
    class DogPro
    {
        private string name;
        private string breed;
        public DogPro() : this(null, null)
        {

        }
        public DogPro(string name, string breed)
        {
            this.name = name;
            //this.SetName(name);
            this.SetBreed(breed);
        }
        public string Name
        {
            get
            {
                return this.name;
            }
            set
            {

                if (value == null || value.Length < 3)
                {
                    throw new Exception("Name cannot be null or less than trhee chars.")
                   }

                this.name = value;
            }
        }
        //public string GetName ()
        //{
        //    return this.name;
        //}
        //private void SetName (string value)
        //{
        //    if (value == null || value.Length < 3)
        //    {
        //        throw new Exception ("Name cannot be null or less than trhee chars.")
        //    }
        //    this.name = value;
        //}
        public string GetBreed()
        {
            return this.breed;
        }
        private void SetBreed(string value)
        {
            this.breed = value;
        }
    }
}
