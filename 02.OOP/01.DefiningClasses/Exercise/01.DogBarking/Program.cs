using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.DogBarking
{
    class Program
    {
        static void Main(string[] args)
        {
            Dog ulichen = new Dog();
            Dog domashen = new Dog("ben", "kralski dog");
            Dog nasaseda = new Dog("gadnqr", "shpaniol");
            Dog[] kuchetataVKvartala = new Dog[3];
            kuchetataVKvartala[0] = ulichen;
            kuchetataVKvartala[1] = domashen;
            kuchetataVKvartala[2] = nasaseda;
            foreach (Dog kuche in kuchetataVKvartala)
            {
                kuche.Breed = "Doberman";
                kuche.Bark();
            }
            //ulichen.Bark();
            //domashen.Bark();
            //domashen.Name = "Charli";
            //domashen.Bark();
        }
    }
}
