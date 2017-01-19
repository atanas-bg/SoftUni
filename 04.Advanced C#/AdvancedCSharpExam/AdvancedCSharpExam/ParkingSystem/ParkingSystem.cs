using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingSystem
{
    class ParkingSystem
    {
        static void Main()
        {
            string[] parkingDimensions =
                Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries);
            int parkingRowSize = int.Parse(parkingDimensions[0]);
            int parkingColumnSize = int.Parse(parkingDimensions[1]);
            int[,] parkingArea = new int[parkingRowSize, parkingColumnSize];
            string[] inputData = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries);
            
            while (inputData[0] != "stop")
            {
                int entryRow = int.Parse(inputData[0]);
                int parkingSpotRow = int.Parse(inputData[1]);
                int parkingSpotColumn = int.Parse(inputData[2]);


            }
        }
    }
}
