using System;
using System.Globalization;
using System.Linq;
using System.Threading;

namespace Orders.Models
{
    class OrdersMain
    {
        static void Main()
        {
            Thread.CurrentThread.CurrentCulture = CultureInfo.InvariantCulture;
            var dataMapper = new dataMapper();
            var allCategories = dataMapper.getAllCategories();
            var allProducts = dataMapper.getAllProducts();
            var allOrders = dataMapper.getAllOrders();

            // Names of the 5 most expensive products
            var fiveMostExpensiveProducts = allProducts
                .OrderByDescending(p => p.UnitPrice)
                .Take(5)
                .Select(p => p.ProductName);
            Console.WriteLine(string.Join(Environment.NewLine, fiveMostExpensiveProducts));
            Console.WriteLine(new string('-', 10));

            // Number of products in each category
            var productsNumberInEachCategory = allProducts
                .GroupBy(p => p.CategoryId)
                .Select(grp => new { Category = allCategories.First(c => c.CategoryId == grp.Key).CategoryName, Count = grp.Count() })
                .ToList();

            foreach (var productsNumber in productsNumberInEachCategory)
            {
                Console.WriteLine("{0}: {1}", productsNumber.Category, productsNumber.Count);
            }

            Console.WriteLine(new string('-', 10));

            // The 5 top products (by Order ProductQuantity)
            var topFiveProductsbyOrderQuantity = allOrders
                .GroupBy(o => o.ProductId)
                .Select(grp => new { Product = allProducts.First(p => p.ProductId == grp.Key).ProductName, Quantities = grp.Sum(grpgrp => grpgrp.ProductQuantity) })
                .OrderByDescending(q => q.Quantities)
                .Take(5);
            foreach (var product in topFiveProductsbyOrderQuantity)
            {
                Console.WriteLine("{0}: {1}", product.Product, product.Quantities);
            }

            Console.WriteLine(new string('-', 10));

            // The most profitable category
            var category = allOrders
                .GroupBy(o => o.ProductId)
                .Select(g => new { catId = allProducts.First(p => p.ProductId == g.Key).CategoryId, price = allProducts.First(p => p.ProductId == g.Key).UnitPrice, quantity = g.Sum(p => p.ProductQuantity) })
                .GroupBy(gg => gg.catId)
                .Select(grp => new { CategoryName = allCategories.First(c => c.CategoryId == grp.Key).CategoryName, TotalQuantity = grp.Sum(g => g.quantity * g.price) })
                .OrderByDescending(g => g.TotalQuantity)
                .First();
            Console.WriteLine("{0}: {1}", category.CategoryName, category.TotalQuantity);
        }
    }
}
