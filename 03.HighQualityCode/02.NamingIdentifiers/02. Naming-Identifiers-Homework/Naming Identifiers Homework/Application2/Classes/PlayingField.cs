using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MineSweeper.Classes
{
    public class PlayingField
    {
    //    private static int boardRows = 5;
    //    private static int boardColumns = 10;

        public static char[,] CreatePlayingField(int boardRows, int boardColumns)
        {
            char[,] board = new char[boardRows, boardColumns];
            for (int i = 0; i < boardRows; i++)
            {
                for (int j = 0; j < boardColumns; j++)
                {
                    board[i, j] = '?';
                }
            }

            return board;
        }

        public static void PrintPlayingField(char[,] playingField)
        {
            int rowLength = playingField.GetLength(0);
            int columnLength = playingField.GetLength(1);
            Console.WriteLine("\n    0 1 2 3 4 5 6 7 8 9");
            Console.WriteLine("   ---------------------");
            for (int i = 0; i < rowLength; i++)
            {
                Console.Write("{0} | ", i);
                for (int j = 0; j < columnLength; j++)
                {
                    Console.Write("{0} ", playingField[i, j]);
                }

                Console.Write("|");
                Console.WriteLine();
            }

            Console.WriteLine("   ---------------------\n");
        }
    }
}
