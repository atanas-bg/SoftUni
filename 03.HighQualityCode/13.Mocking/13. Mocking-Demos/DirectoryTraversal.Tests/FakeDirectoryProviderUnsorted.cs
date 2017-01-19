using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectoryTraversal.Tests
{
    class FakeDirectoryProviderUnsorted : IDirectoryProvider
    {
        public string[] GetDirectories(string path)
        {
            var directories = new string[]
            {
                @"Windows",
                @"Users",
                @"Recovery"
            };

            return directories;
        }
    }
}
