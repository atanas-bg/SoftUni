using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DateTime.Tests
{
    using Moq;
    using DateTime = System.DateTime;

    [TestClass]
    public class DateTimeTest
    {
        [TestMethod]
        public void MockTest()
        {
            var expectedResult = new DateTime(2016, 2, 6, 17, 25, 17);
            var mock = new Mock<IDateTimeProvider>();
            mock.Setup(fake => fake.Now).Returns(new DateTime(2016, 2, 6, 17, 25, 17));
            var time = new Time();
            var mockdate = time.ShowDate(mock.Object.Now);

            Assert.AreEqual(expectedResult, mockdate);
        }
    }
}
