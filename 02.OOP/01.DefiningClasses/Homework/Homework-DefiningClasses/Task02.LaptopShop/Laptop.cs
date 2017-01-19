using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task02.LaptopShop
{
    using _02;

    public class Laptop
    {
        //model, manufacturer, processor, RAM, graphics card, HDD, screen,battery, battery life in hours and price.
        private string model;
        private string manufacturer;
        private string processor;
        private string ram;
        private string graphicsCard;
        private string hdd;
        private string screen;
        private Battery battery;
        private decimal price;

        public Laptop(string model, 
            decimal price,
            string manufacturer = null, 
            string processor = null, 
            string ram = null,
            string graphicsCard = null,
            string hdd = null,
            string screen = null,
            Battery battery = null)
        {
            
        }
    }
}
