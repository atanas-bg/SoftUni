using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DirectoryTraversal.Tests
{
    [TestClass]
    public class DIrectoryTraverserTests
    {
        [TestMethod]
        public void GetChildDirectories_ShouldReturnDirectoryNames()
        {
            // TODO: Apply the Inversion of Control principle 
            // and mock all external dependencies to DirectoryTraverser

            //Arrange
            var fakeDirectoryProvider = new FakeDirectoryProvider();
            var traverser = new DirectoryTraverser(string.Empty, fakeDirectoryProvider);
            var expectedDirectories = new string[]
            {
                "Recovery",
                "Users",
                "Windows"
            };

            //Act
            var children = traverser.GetChildDirectories().ToArray();

            //Assert
            CollectionAssert.AreEqual(expectedDirectories, children);
        }

        [TestMethod]
        public void GetChildDirectories_ShouldCorrectlySortPaths()
        {
            //Arrange
            var fakeDirectoryProvider = new FakeDirectoryProviderUnsorted();
            var traverser = new DirectoryTraverser(string.Empty, fakeDirectoryProvider);
            var expectedDirectories = fakeDirectoryProvider.GetDirectories(string.Empty);
            Array.Sort(expectedDirectories);
            //var expectedDirectories = new string[]
            //{
            //    "Recovery",
            //    "Users",
            //    "Windows"
            //};

            //Act
            var children = traverser.GetChildDirectories().ToArray();

            //Assert
            CollectionAssert.AreEqual(expectedDirectories, children);
        }
    }
}
