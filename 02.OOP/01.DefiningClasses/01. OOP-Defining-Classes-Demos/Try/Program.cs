using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Try
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ExceptionOne("Pesho");
            }
            catch (Exception e)
            {
                Console.WriteLine("jhsdkjashdk");
            }
        }
        static void ExceptionOne(string str)
        {
            try
            {
                ExceptionTwo(str);
            }
            catch (ArgumentException ae)
            {
                throw new Exception("went wrong", ae);
            }
        }
        static void ExceptionTwo(string str)
        {
            try
            {
                int.Parse(str);
            }
            catch (FormatException fe)
            {
                throw new ArgumentException("string format wrong", fe);
            }
        }
        void method(int arg)
        {
            if (arg < 0)
            {
                throw new .....;
            }
            if (arg == null)
            {
                throw new ....;
            }
            if (arg == this.MaxSize)
            {
                throw new .....;
            }

            // do something with argument
        }
    }
}
