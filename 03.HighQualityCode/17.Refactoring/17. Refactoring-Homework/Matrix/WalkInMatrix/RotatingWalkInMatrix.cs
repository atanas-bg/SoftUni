using System;
using System.Data;

namespace Matrix
{
    class RotatingWalkInMatrix
    {
        static void Change(ref int positionX, ref int positionY)
        {
            int[] DirectionsRow = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] DirectionsColumn = { 1, 0, -1, -1, -1, 0, 1, 1 };
            int cd = 0;

            for (int index = 0; index < DirectionsRow.Length; index++)
            {
                if (DirectionsRow[index] == positionX &&
                    DirectionsColumn[index] == positionY)
                {
                    cd = index;

                    break;
                }
            }

            if (cd == 7)
            {
                positionX = DirectionsRow[0];
                positionY = DirectionsColumn[0];

                return;
            }

            positionX = DirectionsRow[cd + 1];
            positionY = DirectionsColumn[cd + 1];
        }

        static bool Check(int[,] matrix, int positionX, int positionY)
        {
            int[] directionsRow = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsColumn = { 1, 0, -1, -1, -1, 0, 1, 1 };

            for (int i = 0; i < directionsRow.Length; i++)
            {
                bool isOutsideRow = ((positionX + directionsRow[i]) >= matrix.GetLength(0)) ||
                                  ((positionX + directionsRow[i]) < 0);

                if (isOutsideRow)
                {
                    directionsRow[i] = 0;
                }

                bool isOutsideColumn = (positionY + directionsColumn[i]) >= matrix.GetLength(0) ||
                                   (positionY + directionsColumn[i]) < 0;

                if (isOutsideColumn)
                {
                    directionsColumn[i] = 0;
                }
            }

            for (int i = 0; i < directionsRow.Length; i++)
            {
                int row = positionX + directionsRow[i];
                int column = positionY + directionsColumn[i];

                if (matrix[row, column] == 0)
                {
                    return true;
                }

            }

            return false;
        }

        static void FindCell(int[,] matrix, out int positionX, out int positionY)
        {
            positionX = 0;
            positionY = 0;

            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int column = 0; column < matrix.GetLength(1); column++)
                {
                    if (matrix[row, column] == 0)
                    {
                        positionX = row; positionY = column;

                        return;
                    }
                }
            }
        }

        static void Main(string[] args)
        {
            //Console.WriteLine( "Enter a positive number " );
            //string input = Console.ReadLine(  );
            //int n = 0;
            //while ( !int.TryParse( input, out n ) || n < 0 || n > 100 )
            //{
            //    Console.WriteLine( "You haven't entered a correct positive number" );
            //    input = Console.ReadLine(  );
            //}

            int matrixSize = 3;
            int[,] matrix = new int[matrixSize, matrixSize];
            int current = 1,
                rowIndex = 0,
                columnIndex = 0,
                dx = 1,
                dy = 1;

            while (true)
            {
                matrix[rowIndex, columnIndex] = current;

                if (!Check(matrix, rowIndex, columnIndex))
                {
                    break;// stops if no exit is found
                }

                if (rowIndex + dx >= matrixSize || rowIndex + dx < 0 ||
                    columnIndex + dy >= matrixSize || columnIndex + dy < 0 ||
                    matrix[rowIndex + dx, columnIndex + dy] != 0)
                {
                    while ((rowIndex + dx >= matrixSize || rowIndex + dx < 0 ||
                            columnIndex + dy >= matrixSize || columnIndex + dy < 0 ||
                            matrix[rowIndex + dx, columnIndex + dy] != 0))
                    {
                        Change(ref dx, ref dy);
                    }
                }

                rowIndex += dx;
                columnIndex += dy;
                current++;
            }

            for (int p = 0; p < matrixSize; p++)
            {
                for (int q = 0; q < matrixSize; q++)
                {
                    Console.Write("{0,3}", matrix[p, q]);
                }

                Console.WriteLine();
            }

            FindCell(matrix, out rowIndex, out columnIndex);

            if (rowIndex != 0 && columnIndex != 0)
            {
                dx = 1; dy = 1;// define out parameters

                while (true)
                {
                    matrix[rowIndex, columnIndex] = current;

                    if (!Check(matrix, rowIndex, columnIndex))
                    {
                        break;// stops if no exit is found
                    }

                    if (rowIndex + dx >= matrixSize || rowIndex + dx < 0 ||
                        columnIndex + dy >= matrixSize || columnIndex + dy < 0 ||
                        matrix[rowIndex + dx, columnIndex + dy] != 0)
                    {
                        while ((rowIndex + dx >= matrixSize || rowIndex + dx < 0 ||
                                columnIndex + dy >= matrixSize || columnIndex + dy < 0 ||
                                matrix[rowIndex + dx, columnIndex + dy] != 0))
                        {
                            Change(ref dx, ref dy);
                        }
                    }

                    rowIndex += dx;
                    columnIndex += dy;
                    current++;
                }
            }

            for (int row = 0; row < matrixSize; row++)
            {
                for (int column = 0; column < matrixSize; column++)
                {
                    Console.Write("{0,3}", matrix[row, column]);
                }

                Console.WriteLine();
            }
        }

        public void PrintMatrix(int[,] matrix)
        {
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int column = 0; column < matrix.GetLength(1); column++)
                {
                    Console.Write("{0,3}", matrix[row, column]);
                }

                Console.WriteLine();
            }
        }
    }
}
