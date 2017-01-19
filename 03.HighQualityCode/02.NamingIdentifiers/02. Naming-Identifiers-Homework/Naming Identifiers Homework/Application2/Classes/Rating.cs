using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MineSweeper.Classes
{
    class Rating
    {
        private string name;

        private int points;

       
        public Rating()
        {
        }

        public Rating(string name, int points)
        {
            this.Name = name;
            this.Points = points;
        }

        public string Name
        {
            get { return this.name; }

            set { this.name = value; }
        }

        public int Points
        {
            get { return this.points; }

            set { this.points = value; }
        }

        internal static void PrintRating(List<Rating> points)
        {
            Console.WriteLine("\nТочки:");
            if (points.Count > 0)
            {
                for (int i = 0; i < points.Count; i++)
                {
                    Console.WriteLine("{0}. {1} --> {2} кутии", i + 1, points[i].Name, points[i].Points);
                }

                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("Празна класация!\n");
            }
        }
    }
}
