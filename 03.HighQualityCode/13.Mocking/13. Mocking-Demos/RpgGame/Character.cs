namespace RpgGame
{
    using System;
    using System.Collections.Generic;

    public class Character
    {
        private static Random random;
        private readonly List<Item> possibleItemDrops;

        public Character(List<Item> items, IRandomNumberGenerator numberGenerator)
        {
            this.RandomNumberGenerator = numberGenerator;
            this.possibleItemDrops = items;
        }

        public IRandomNumberGenerator RandomNumberGenerator { get; private set; }

        public Item DropItem()
        {
            var randomIndex = RandomNumberGenerator.GetRandomNumber(0, this.possibleItemDrops.Count - 1);

            return this.possibleItemDrops[randomIndex];
        }
    }

    //public interface IRandomNumberProvider
    //{
    //    int GetRandomNumber(int min, int max);
    //}

    //public class RandomNumberProvider : IRandomNumberProvider
    //{
    //    private Random random;

    //    public RandomNumberProvider()
    //    {
    //        random = new Random();
    //    }

    //    public int GetRandomNumber(int min, int max)
    //    {
    //        return random.Next(min, max + 1);
    //    }
    //}
}
