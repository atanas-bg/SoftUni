namespace CollectResources
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class CollectResources
    {
        static void Main()
        {
            string[] resourceField =
                Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            int collectionPathsNumber = int.Parse(Console.ReadLine());
            int maxCollectedQuantity = 0;

            for (int collectionPath = 0; collectionPath < collectionPathsNumber; collectionPath++)
            {
                var waysToCollectResources =
                    Console.ReadLine()
                    .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(way => int.Parse(way))
                    .ToArray();
                int startPosition = waysToCollectResources[0];
                int stepToMoveRight = waysToCollectResources[1];
                int collectedQuantity = 0;
                List<string> collectedResources = new List<string>();
                int maxPosition = resourceField.Length - 1;

                for (int currentPosition = startPosition;
                    currentPosition <= maxPosition;
                    currentPosition += stepToMoveRight)
                {
                    string[] data = resourceField[currentPosition].Split('_');
                    string resource = data[0];
                    int quantity = 0;
                    if (data.Length == 2)
                    {
                        quantity = int.Parse(data[1]);
                    }
                    else
                    {
                        quantity = 1;
                    }

                    if (collectedResources.Contains(resource))
                    {
                        break;
                    }

                    switch (resource)
                    {
                        case "stone":
                            collectedQuantity += quantity;
                            collectedResources.Add(resource);
                            break;
                        case "gold":
                            collectedQuantity += quantity;
                            collectedResources.Add(resource);
                            break;
                        case "wood":
                            collectedQuantity += quantity;
                            collectedResources.Add(resource);
                            break;
                        case "food":
                            collectedQuantity += quantity;
                            collectedResources.Add(resource);
                            break;
                    }

                    if (currentPosition + stepToMoveRight > maxPosition)
                    {
                        currentPosition = -((maxPosition - currentPosition) + 1);
                    }
                }

                if (maxCollectedQuantity < collectedQuantity)
                {
                    maxCollectedQuantity = collectedQuantity;
                }
            }

            Console.WriteLine(maxCollectedQuantity);
        }
    }
}
