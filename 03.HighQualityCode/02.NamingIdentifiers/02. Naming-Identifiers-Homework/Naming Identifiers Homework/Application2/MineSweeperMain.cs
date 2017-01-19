using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MineSweeper.Classes;

namespace MineSweeper
{
    public class MineSweeperMain
    {
        public static void Main(string[] arguments)
        {
            int maxBoxesCount = 35;
            int row = 0;
            int column = 0;
            int boxCounter = 0;
            bool foundMine = false;
            string commandLine = string.Empty;
            int fieldRows = 5;
            int fieldColumns = 10;
            int playersCount = 5;
            char[,] playingField = PlayingField.CreatePlayingField(fieldRows, fieldColumns);
            char[,] minesField = SetMines();

            List<Rating> topPlayers = new List<Rating>(playersCount + 1);

            bool isFirstGame = true;

            bool MaximumBoxes = false;

            do
            {
                if (isFirstGame)
                {
                    Console.WriteLine(
                        "Хайде да играем на \"MineSweeper\". Пробвай си късмета да откриеш полета без мини." +
                         "\nКоманда 'top' показва класирането, 'restart' започва нова игра,\n'exit' приключва играта!");
                    PlayingField.PrintPlayingField(playingField);
                    isFirstGame = false;
                }

                Console.Write("Въведете ред и колна: ");
                commandLine = Console.ReadLine().Trim();
                bool parseRow = int.TryParse(commandLine[0].ToString(), out row);
                bool parseColumn = int.TryParse(commandLine[2].ToString(), out column);
                int rowsLength = playingField.GetLength(0);
                int columnsLength = playingField.GetLength(1);

                if (commandLine.Length >= 3)
                {
                    if (parseRow && parseColumn && row <= rowsLength && column <= columnsLength)
                    {
                        commandLine = "turn";
                    }
                }

                switch (commandLine)
                {
                    case "top":
                        Rating.PrintRating(topPlayers);
                        break;
                    case "restart":
                        playingField = PlayingField.CreatePlayingField(fieldRows, fieldColumns);
                        minesField = SetMines();
                        PlayingField.PrintPlayingField(playingField);
                        foundMine = false;
                        isFirstGame = false;
                        break;
                    case "exit":
                        Console.WriteLine("End of the game!");
                        break;
                    case "turn":
                        if (minesField[row, column] != '*')
                        {
                            if (minesField[row, column] == '-')
                            {
                                findClosestMines(playingField, minesField, row, column);
                                boxCounter++;
                            }

                            if (maxBoxesCount == boxCounter)
                            {
                                MaximumBoxes = true;
                            }
                            else
                            {
                                PlayingField.PrintPlayingField(playingField);
                            }
                        }
                        else
                        {
                            foundMine = true;
                        }

                        break;
                    default:
                        Console.WriteLine("\nГрешка! Невалидна команда!\n");
                        break;
                }

                if (foundMine)
                {
                    PlayingField.PrintPlayingField(minesField);
                    Console.Write("\nХррр! Умря геройски с {0} точки. " + "Въведете потребителско име: ", boxCounter);
                    string userName = Console.ReadLine();
                    Rating playerRating = new Rating(userName, boxCounter);
                    int maxPlayersCount = 5;
                    if (topPlayers.Count < maxPlayersCount)
                    {
                        topPlayers.Add(playerRating);
                    }
                    
                    else
                    {
                        for (int i = 0; i < topPlayers.Count; i++)
                        {
                            if (topPlayers[i].Points < playerRating.Points)
                            {
                                topPlayers.Insert(i, playerRating);
                                topPlayers.RemoveAt(topPlayers.Count - 1);
                                break;
                            }
                        }
                    }

                    topPlayers.Sort((Rating r1, Rating r2) => r2.Name.CompareTo(r1.Name));
                    topPlayers.Sort((Rating r1, Rating r2) => r2.Points.CompareTo(r1.Points));
                    Rating.PrintRating(topPlayers);

                    playingField = PlayingField.CreatePlayingField(fieldRows, fieldColumns);
                    minesField = SetMines();
                    boxCounter = 0;
                    foundMine = false;
                    isFirstGame = true;
                }

                if (MaximumBoxes)
                {
                    Console.WriteLine("\nБраво! Отвори 35 клетки без капка кръв.");
                    PlayingField.PrintPlayingField(minesField);
                    Console.WriteLine("Въведете си името: ");
                    string name = Console.ReadLine();
                    Rating points = new Rating(name, boxCounter);
                    topPlayers.Add(points);
                    Rating.PrintRating(topPlayers);
                    playingField = PlayingField.CreatePlayingField(fieldRows, fieldColumns);
                    minesField = SetMines();
                    boxCounter = 0;
                    MaximumBoxes = false;
                    isFirstGame = true;
                }
            }
            while (commandLine != "exit");

            Console.WriteLine("Made in Bulgaria!");
            Console.WriteLine("AREEEEEEeeeeeee.");
            Console.Read();
        }



        private static void findClosestMines(char[,] field, char[,] mines, int row, int column)
        {
            char ClosestMinesCount = CalculateClosestMines(mines, row, column);
            mines[row, column] = ClosestMinesCount;
            field[row, column] = ClosestMinesCount;
        }

        private static char[,] SetMines()
        {
            int rows = 5;
            int columns = 10;
            char[,] playingField = new char[rows, columns];

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < columns; j++)
                {
                    playingField[i, j] = '-';
                }
            }

            List<int> randomNumbers = new List<int>();
            int maxRandomNumbersLength = 15;
            while (randomNumbers.Count < maxRandomNumbersLength)
            {
                Random random = new Random();
                int randomValue = random.Next(50);
                if (!randomNumbers.Contains(randomValue))
                {
                    randomNumbers.Add(randomValue);
                }
            }

            foreach (int number in randomNumbers)
            {
                int row = number / columns;
                int column = number % columns;
                if (column == 0 && row != 0)
                {
                    row--;
                    column = columns;
                }
                else
                {
                    column++;
                }

                playingField[row, column - 1] = '*';
            }

            return playingField;
        }

        private static void MinesCalculations(char[,] playingBoard)
        {
            int row = playingBoard.GetLength(0);
            int column = playingBoard.GetLength(1);

            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < column; j++)
                {
                    if (playingBoard[i, j] != '*')
                    {
                        char closestMinesCount = CalculateClosestMines(playingBoard, i, j);
                        playingBoard[i, j] = closestMinesCount;
                    }
                }
            }
        }

        private static char CalculateClosestMines(char[,] field, int fieldRow, int fieldColumn)
        {
            int minesCounter = 0;
            int maxRows = field.GetLength(0);
            int maxColumns = field.GetLength(1);

            if (fieldRow > 0)
            {
                if (field[fieldRow - 1, fieldColumn] == '*')
                {
                    minesCounter++;
                }
            }

            if (fieldRow + 1 < maxRows)
            {
                if (field[fieldRow + 1, fieldColumn] == '*')
                {
                    minesCounter++;
                }
            }

            if (fieldColumn - 1 >= 0)
            {
                if (field[fieldRow, fieldColumn - 1] == '*')
                {
                    minesCounter++;
                }
            }

            if (fieldColumn + 1 < maxColumns)
            {
                if (field[fieldRow, fieldColumn + 1] == '*')
                {
                    minesCounter++;
                }
            }

            if ((fieldRow - 1 >= 0) && (fieldColumn - 1 >= 0))
            {
                if (field[fieldRow - 1, fieldColumn - 1] == '*')
                {
                    minesCounter++;
                }
            }

            if ((fieldRow - 1 >= 0) && (fieldColumn + 1 < maxColumns))
            {
                if (field[fieldRow - 1, fieldColumn + 1] == '*')
                {
                    minesCounter++;
                }
            }

            if ((fieldRow + 1 < maxRows) && (fieldColumn - 1 >= 0))
            {
                if (field[fieldRow + 1, fieldColumn - 1] == '*')
                {
                    minesCounter++;
                }
            }

            if ((fieldRow + 1 < maxRows) && (fieldColumn + 1 < maxColumns))
            {
                if (field[fieldRow + 1, fieldColumn + 1] == '*')
                {
                    minesCounter++;
                }
            }

            return char.Parse(minesCounter.ToString());
        }
    }
}