using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Monopoly
{
    using System.Security.AccessControl;

    public class Monopoly
    {
        const string hotel = "H";
        const string jail = "J";
        const string free = "F";
        const string shop = "S";

        static void Main()
        {
            // Creates the board
            int[] boardSizes = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(element => int.Parse(element))
                .ToArray();
            int boardRows = boardSizes[0];
            int boardColumns = boardSizes[1];
            string[,] board = new string[boardRows, boardColumns];

            // Fills the board
            for (int row = 0; row < boardRows; row++)
            {
                string line = Console.ReadLine();

                for (int column = 0; column < boardColumns; column++)
                {
                    board[row, column] = line.Substring(column, 1);
                }
            }

            int money = 50;
            int spentMoney = 0;
            int hotelsCount = 0;
            int hotelPrice = 10;
            bool moveRight = true;
            int turns = 0;
            int jailMissedTurns = 2;
            bool isInJail = false;

            // Moves on the board
            for (int row = 0; row < boardRows; row++)
            {
                if (moveRight)
                {
                    for (int column = 0; column < boardColumns; column++)
                    {
                        hotelsCount = Action(board, row, column, hotelsCount, hotelPrice, jailMissedTurns, ref money, ref turns, ref isInJail);
                    }

                    moveRight = false;
                }
                else
                {
                    for (int column = boardColumns - 1; column >= 0; column--)
                    {
                        hotelsCount = Action(board, row, column, hotelsCount, hotelPrice, jailMissedTurns, ref money, ref turns, ref isInJail);
                    }

                    moveRight = true;
                }


            }
            if (isInJail && turns == 3)
            {
                turns = 1;
            }

            Console.WriteLine("Turns {0}", turns);
            Console.WriteLine("Money {0}", money);
        }

        private static int Action(string[,] board, int row, int column, int hotelsCount, int hotelPrice, int jailMissedTurns,
            ref int money, ref int turns, ref bool isInJail)
        {
            int spentMoney = 0;
            string currentPosition = board[row, column];

            switch (currentPosition)
            {
                case hotel:
                    hotelsCount = hotelsCount + 1;
                    Console.WriteLine("Bought a hotel for {0}. Total hotels: {1}.", money, hotelsCount);
                    money = hotelsCount * hotelPrice;
                    ++turns;
                    break;
                case jail:
                    Console.WriteLine("Gone to jail at turn {0}.", turns);
                    ++turns;
                    turns += jailMissedTurns;
                    money += (jailMissedTurns + 1) * (hotelsCount * hotelPrice);
                    isInJail = true;
                    break;
                case free:
                    ++turns;
                    money += hotelsCount * hotelPrice;
                    break;
                case shop:
                    money += hotelsCount * hotelPrice;
                    spentMoney = (row + 1) * (column + 1);
                    money = money - spentMoney;

                    if (money < 0)
                    {
                        money = 0;
                    }

                    Console.WriteLine("Spent {0} money at the shop.", spentMoney);
                    ++turns;
                    break;
            }

            return hotelsCount;
        }
    }
}
