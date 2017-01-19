using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestPressureSystem.Tests
{
    using Moq;

    [TestClass]
    public class AlarmTests
    {
       [TestMethod]
        public void Checking_PressureOverTheHighestLevel_ShouldReturnFalse()
       {
           //  Range: 17 - 21
           bool isOutsideTheRange = true;

            //Arrange
            FakeSensor fakeSensor = new FakeSensor(15.45);
            var alarm = new Alarm(fakeSensor);

            //Act
            var check = alarm.Check();

            //Assert
            Assert.AreEqual(isOutsideTheRange, alarm.Check());
        }

        [TestMethod]
        public void Checking_PressureBelowTheLowestLevel_ShouldReturnTrue()
        {
            bool isOutsideTheRange = true;

            //Arrange
            FakeSensor fakeSensor = new FakeSensor(23.56);
            var alarm = new Alarm(fakeSensor);

            //Act
            var check = alarm.Check();

            //Assert
            Assert.AreEqual(isOutsideTheRange, alarm.Check());
        }
    }
}
