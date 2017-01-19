using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectoryTraversal
{
    public interface IDirectoryProvider
    {
        string[] GetDirectories(string path);
    }
}
