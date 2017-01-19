namespace Extension_Methods
{
    using System;
    using System.Collections.Generic;

    class ExtensionMethods
    {
        static void Main()
        {
            string s = "Hello Extension Methods";
            int i = s.WordCount();
            Console.WriteLine(i);

            List<int> ints = new List<int> {1, 2, 3, 4, 5};
            Console.WriteLine(ints.ToString());
            Console.WriteLine(ints.ToString<int>());

            ints.IncreaseWidth(5);
            Console.WriteLine(ints.ToString<int>());
        }
    }
}
