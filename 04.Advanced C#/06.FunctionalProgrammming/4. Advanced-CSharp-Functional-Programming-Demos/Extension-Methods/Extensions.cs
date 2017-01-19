namespace Extension_Methods
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public static class Extensions
    {
        public static int WordCount(this string str)
        {
            return str.Split(new char[] {' ', '.', '?'},
                StringSplitOptions.RemoveEmptyEntries).Length;
        }

        public static string ToString<T>(this IEnumerable<T> enumeration)
        {
            StringBuilder result = new StringBuilder();
            result.Append("[ ");
            foreach (var item in enumeration)
            {
                result.Append(item.ToString());
                result.Append(" ");
            }
            result.Append("]");
            return result.ToString();
        }

        public static void IncreaseWidth(this IList<int> list, int amount)
        {
            for (int i = 0; i < list.Count; i++)
            {
                list[i] += amount;
            }
        }
    }
}