﻿namespace BangaloreUniversityLearningSystem.Utilities
{
    using System.Security.Cryptography;
    using System.Text;

    public static class HashUtilities
    {
        public static string HashPassword(string inputString)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(inputString);
            var sha1 = SHA1.Create();
            byte[] hashedBytes = sha1.ComputeHash(bytes);

            return HexStringFromBytes(hashedBytes);
        }

        private static string HexStringFromBytes(byte[] bytes)
        {
            var result = new StringBuilder();

            foreach (byte element in bytes)
            {
                result.Append(element.ToString("x2"));
            }

            return result.ToString();
        }
    }
}