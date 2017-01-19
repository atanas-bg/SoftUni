using System;
using GenericList;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CustomGenericList.Tests
{
    [TestClass]
    public class CustomGenericListTests
    {
        private GenericList<int> list;
        private const int Size = 16;

        [TestInitialize]
        public void TestInit()
        {
            list = new GenericList<int>(Size);
        }

        [TestMethod]
        public void Add_EmptyList_ShouldIncrementCount()
        {
            //var list = new GenericList<int>();
            list.Add(5);

            Assert.AreEqual(1, list.Count);
        }

        [TestMethod]
        public void Add_OverCapacity_ShouldResizeCorrectly()
        {
            const int Count = 100;

            // var list = new GenericList<int>(1);
            for (int i = 0; i < 100; i++)
            {
                list.Add(i);
            }

            Assert.AreEqual(Count, list.Count);
        }

        [TestMethod]
        public void IndexerGet_ShouldReturnProperElement()
        {
            list.Add(5);
            list.Add(3);
            var element = list[0];
            Assert.AreEqual(5, element);
        }

        [TestMethod]
        [ExpectedException(typeof(IndexOutOfRangeException))]
        public void IndexerGet_InvalidIndex_ShouldThrow()
        {
            list.Add(5);
            list.Add(3);
            var element = list[3];
        }

        [TestMethod]
        public void Min_NonEmptyList_ShouldReturnMinValue()
        {
            list.Add(5);
            list.Add(6);
            list.Add(34);
            var minElement = list.Min();

            Assert.AreEqual(5, minElement);
        }

        [TestMethod]
        [ExpectedException(typeof(InvalidOperationException))]
        public void Min_EmptyList_ShouldThrow()
        {
            list.Min();
        }

        [TestMethod]
        public void Max_NonEmptyList_ShouldReturnMaxValue()
        {
            list.Add(5);
            list.Add(6);
            list.Add(34);
            var maxElement = list.Max();

            Assert.AreEqual(34, maxElement);
        }

        [TestMethod]
        [ExpectedException(typeof(InvalidOperationException))]
        public void Max_EmptyList_ShouldThrow()
        {
            this.list.Max();
        }

        [TestMethod]
        public void InsertAt_ValidIndex_ShouldInsertAndShiftElementsToRight()
        {
            const int InsertedValue = -20;
            const int InsertedIndex = 3;
            const int maxIndex = 10;

            for (int i = 0; i < maxIndex; i++)
            {
                this.list.Add(i);
            }

            this.list.InsertAt(InsertedValue, InsertedIndex);

            Assert.AreEqual(maxIndex + 1, this.list.Count);
            Assert.AreEqual(InsertedValue, this.list[InsertedIndex]);
            for (int i = InsertedIndex + 1; i < maxIndex + 1; i++)
            {
                Assert.AreEqual(i - 1, this.list[i]);
            }
        }

        [TestMethod]
        [ExpectedException(typeof(IndexOutOfRangeException))]
        public void Insert_At_InvalidIndex_ShouldThrow()
        {
            this.list.InsertAt(5, 1);
        }


    }
}
