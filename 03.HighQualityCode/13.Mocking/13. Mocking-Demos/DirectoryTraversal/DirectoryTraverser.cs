﻿namespace DirectoryTraversal
{
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    public class DirectoryTraverser
    {
        public DirectoryTraverser(string directory, IDirectoryProvider directoryProvider)
        {
            this.CurrentDirectory = directory;
            this.DirectoryProvider = directoryProvider;
        }

        public string CurrentDirectory { get; private set; }
        public IDirectoryProvider DirectoryProvider { get; private set; }

        public IEnumerable<string> GetChildDirectories()
        {
            var directories = this.DirectoryProvider
                .GetDirectories(this.CurrentDirectory);

            var directoryNames = new List<string>(directories.Length);

            foreach (var directory in directories)
            {
                int lastBackSlash = directory.LastIndexOf("\\");
                string directoryName = directory.Substring(lastBackSlash + 1);

                directoryNames.Add(directoryName);
            }

            directoryNames.Sort();

            return directoryNames;
        }
    }
}
