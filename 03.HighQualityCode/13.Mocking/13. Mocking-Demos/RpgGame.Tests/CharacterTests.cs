using Moq;

namespace RpgGame.Tests
{
    using System.Collections.Generic;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class CharacterTests
    {
        [TestMethod]
        public void Character_Should_Drop_First_Item()
        {
            // Arrange
            var possibleItemDrops = new List<Item>
            {
                new Item("Axe", 25, 5),
                new Item("Shield", 5, 50),
                new Item("Resilience Potion", 0, 30)
            };
            var mock = new Mock<IRandomNumberGenerator>();
            mock.Setup(r => r.GetRandomNumber(It.IsAny<int>(), It.IsAny<int>()))
                .Returns(0);
            //var fakeRandomNumberGenerator = new FakeRandomNumberGenerator();

            var character = new Character(possibleItemDrops, mock.Object);//mock.Object replaces fakeRandomNumberGenerator
            
            // Act
            for (int i = 0; i < 1000; i++)
            {
                var item = character.DropItem();

                // Assert
                Assert.AreEqual("Axe", item.Name);
            }
        }
    }
}
