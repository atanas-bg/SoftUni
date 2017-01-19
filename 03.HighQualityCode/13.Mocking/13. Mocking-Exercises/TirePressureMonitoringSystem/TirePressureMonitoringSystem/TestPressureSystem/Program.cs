using System;

namespace TestPressureSystem
{
    public class Program
    {
        static void Main(string[] args)
        {
            ICheckable sensor = new Sensor();
            Alarm tyre = new Alarm(sensor);
            bool result = tyre.Check();

            if (result)
            {
                Console.WriteLine("Pressure {0:F2} is not in the range 17 - 21", tyre.PsiPressureValue);
            }
            else
            {
                Console.WriteLine("Pressure {0:F2} is in the range 17 - 21",tyre.PsiPressureValue);
            }
        }
    }
}
