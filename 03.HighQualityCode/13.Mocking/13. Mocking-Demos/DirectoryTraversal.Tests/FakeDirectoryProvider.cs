using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectoryTraversal.Tests
{
    class FakeDirectoryProvider : IDirectoryProvider
    {
        public string[] GetDirectories(string path)
        {
            var directories = new string[]
            {
                @"C:\Bin\FR\Group\New\Recovery",
                @"C:\Windows\Main\Users",
                @"C:\Windows"
            };

            return directories;
        }
    }
}
