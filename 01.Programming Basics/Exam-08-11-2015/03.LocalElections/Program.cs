using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.LocalElections
{
    class Program
    {
        static void Main()
        {
            //...+-----+...
            //...|.\./.|...
            //01.|..X..|...
            //...|./.\.|...

            //...|\.../|...
            //04.|.\./.|...
            //...|..V..|...

            //...|.....|...
            //03.|.....|...
            //...|.....|...



            int numberCandidates = int.Parse(Console.ReadLine());
            int voteNumber = int.Parse(Console.ReadLine());
            char symbol = char.Parse(Console.ReadLine());
            Console.WriteLine(new string('.', 13));

            for (int i = 1; i <= numberCandidates; i++)
            {
                Console.WriteLine("...+-----+...");
                if (i == voteNumber)
                {
                    if (symbol == 'x' || symbol == 'X')
                    {
                        Console.WriteLine("...|.\\./.|...");
                        Console.WriteLine("{0:00}.|..X..|...", i);
                        Console.WriteLine("...|./.\\.|...");

                    }
                    else if (symbol == 'v' || symbol == 'V')
                    {
                        Console.WriteLine("...|\\.../|...");
                        Console.WriteLine("{0:00}.|.\\./.|...", i);
                        Console.WriteLine("...|..V..|...");
                    }
                    Console.WriteLine("...+-----+...");
                    Console.WriteLine(new string('.', 13));
                }
                else
                {
                    Console.WriteLine("...|.....|...");
                    Console.WriteLine("{0:00}.|.....|...", i);
                    Console.WriteLine("...|.....|...");
                    Console.WriteLine("...+-----+...");
                    Console.WriteLine(new string('.', 13));
                }

            }



        }
    }
}
