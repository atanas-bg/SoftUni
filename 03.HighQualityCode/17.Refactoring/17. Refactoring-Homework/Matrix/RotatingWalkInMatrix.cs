using System;

namespace Matrix
{
    class RotatingWalkInMatrix
    {
        static void Change(ref int dx, ref int dy)
        {
            int[] dirX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] dirY = { 1, 0, -1, -1, -1, 0, 1, 1 };
            int cd = 0;

            for (int count = 0; count < 8; count++)
            {
                if (dirX[count] == dx && dirY[count] == dy)
                {
                    cd = count;
                    break;
                }
            }

            if (cd == 7)
            {
                dx = dirX[0]; dy = dirY[0];

                return;
            }

            dx = dirX[cd + 1];
            dy = dirY[cd + 1];
        }

        static bool Check(int[,] array, int x, int y)
        {
            int[] dirX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] dirY = { 1, 0, -1, -1, -1, 0, 1, 1 };

            for (int i = 0; i < 8; i++)
            {
                if (x + dirX[i] >= array.GetLength(0) || x + dirX[i] < 0) dirX[i] = 0;
                if (y + dirY[i] >= array.GetLength(0) || y + dirY[i] < 0) dirY[i] = 0;
            }

            for (int i = 0; i < 8; i++)
            {
                if (array[x + dirX[i], y + dirY[i]] == 0)
                {
                    return true;
                }
            }

            return false;
        }

        static void FindCell(int[,] array, out int x, out int y)
        {
            x = 0;
            y = 0;

            for (int i = 0; i < array.GetLength(0); i++)
            {
                for (int j = 0; j < array.GetLength(0); j++)
                {
                    if (array[i, j] == 0)
                    {
                        x = i; y = j;

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

            int n = 3;
            int[,] matrix = new int[n, n];
            int step = n,
                k = 1,
                i = 0,
                j = 0,
                dx = 1,
                dy = 1;

            while (true)
            {
                matrix[i, j] = k;

                if (!Check(matrix, i, j))
                {
                    break;// stops if no exit is found
                }

                if (i + dx >= n || i + dx < 0 || j + dy >= n || j + dy < 0 || matrix[i + dx, j + dy] != 0)

                    while ((i + dx >= n || i + dx < 0 || j + dy >= n || j + dy < 0 || matrix[i + dx, j + dy] != 0))
                    {
                        Change(ref dx, ref dy);
                    }
                i += dx; j += dy; k++;
            }

            for (int p = 0; p < n; p++)
            {
                for (int q = 0; q < n; q++) Console.Write("{0,3}", matrix[p, q]);
                Console.WriteLine();
            }

            FindCell(matrix, out i, out j);


            if (i != 0 && j != 0)
            {
                dx = 1; dy = 1;// define out parameters

                while (true)
                {
                    matrix[i, j] = k;
                    if (!Check(matrix, i, j))
                    {
                        break;// stops if no exit is found
                    }

                    if (i + dx >= n || i + dx < 0 || j + dy >= n || j + dy < 0 || matrix[i + dx, j + dy] != 0)
                        while ((i + dx >= n || i + dx < 0 || j + dy >= n || j + dy < 0 || matrix[i + dx, j + dy] != 0))
                            Change(ref dx, ref dy);
                    i += dx; j += dy; k++;
                }
            }

            for (int pp = 0; pp < n; pp++)
            {
                for (int qq = 0; qq < n; qq++) Console.Write("{0,3}", matrix[pp, qq]);

                Console.WriteLine();
            }
        }
    }
}
