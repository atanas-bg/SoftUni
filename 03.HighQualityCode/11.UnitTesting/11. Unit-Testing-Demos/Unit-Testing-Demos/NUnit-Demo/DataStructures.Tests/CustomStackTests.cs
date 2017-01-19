using System;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DataStructures.Tests
{
    [TestClass]
    public class CustomStackTests
    {
        private static CustomStack<int> stack;

        [TestInitialize]
        public void TestInitialize()
        {
            stack = new CustomStack<int>();
        }

        //Assembly Init
        //Class Init
        // Test Init
        //...
        //Test Cleanup
        //Test Init
        //...
        //Test Cleanup
        //Class Cleanup
        //Assembly Cleanup

        //[TestCleanup]
        //public void Cleanup()
        //{

        //}

        //[ClassInitialize]
        //public void ClassInit()
        //{

        //}

        //[ClassCleanup]
        //public void ClassCleanup()
        //{

        //}

        [TestMethod]
        public void Push_EmptyStack_ShouldIncrementCount()
        {
            //Arrange
            //var stack = new CustomStack<int>();

            //Act
            stack.Push(5);

            //Assert
            Assert.AreEqual(1, stack.Count);
        }

        [TestMethod]
        public void Pop_NonEmptyStack_ShouldDecrementCount()
        {
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);

            Assert.AreEqual(3, stack.Count);
            stack.Pop();
            Assert.AreEqual(2, stack.Count);
        }

        [TestMethod]
        public void Push_FullStack_ShouldResizeCorrectly()
        {
            const int count = 10;
            //arrange
            var stack = new CustomStack<int>(1);

            //Act
            for (int i = 0; i < count; i++)
            {
                stack.Push(i);
            }

            //Assert
            Assert.AreEqual(count, stack.Count, "Stack count is not correct.");
        }

        [TestMethod]
        [ExpectedException(typeof(InvalidOperationException))]
        public void Pop_EmptyStack_ShouldThrow()
        {
            //Arrange
            //var stack = new CustomStack<int>(); Initialized in TestInitialize 

            //Act
            stack.Pop();
        }

        [TestMethod]
        public void Pop_ItemsInStack_ShouldReturnLastPushedItem()
        {
            const int MaxItem = 1000;

            for (int i = 1; i <= MaxItem; i++)
            {
                stack.Push(i);
            }

            ValueType item = stack.Pop();

            Assert.AreEqual(MaxItem, item);
        }

        [TestMethod]
        public void Pop_ItemsInStack_ShouldReturnLastPushedItem_ByReference()
        {
            //Arrange
            var items = new CustomStack<StringBuilder>();
            var StringBuilder1 = new StringBuilder("asd");
            var StringBuilder2 = new StringBuilder("fgh");

            //Act            
            items.Push(StringBuilder1);
            items.Push(StringBuilder2);
            var builder = items.Pop();

            //Assert
            Assert.AreSame(StringBuilder2, builder);
        }


    }
}
