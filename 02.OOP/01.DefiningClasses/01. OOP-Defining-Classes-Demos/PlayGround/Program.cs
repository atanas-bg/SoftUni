using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayGround
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                int x = int.Parse("Pesho");
                Console.WriteLine(x);
            }
            catch (OverflowException oe)
            {
                Console.WriteLine("number too big");
            }
            catch (FormatException fo)
            {
                Console.WriteLine(fo.Message);
                //Console.WriteLine("Invalid integer format");
            }
            finally
            {
                Console.WriteLine("Finally");
            }
        }
    }
}
