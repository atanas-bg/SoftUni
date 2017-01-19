using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectoryTraversal
{
    class DirectoryProvider : IDirectoryProvider
    {
        public string[] GetDirectories(string path)
        {
            var directories = Directory.GetDirectories(path);

            return directories;
        }
    }
}
