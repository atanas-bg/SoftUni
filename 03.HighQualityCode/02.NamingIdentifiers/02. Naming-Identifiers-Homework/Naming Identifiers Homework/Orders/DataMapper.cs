using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace Orders.Models
{
    public class dataMapper
    {
        private string categoriesFileName;
        private string productsFileName;
        private string ordersFileName;

        public dataMapper(string categoriesFileName, string productsFileName, string ordersFileName)
        {
            this.categoriesFileName = categoriesFileName;
            this.productsFileName = productsFileName;
            this.ordersFileName = ordersFileName;
        }

        public dataMapper()
            : this("../../Data/categories.txt", "../../Data/products.txt", "../../Data/orders.txt")
        {
        }

        public IEnumerable<category> getAllCategories()
        {
            var categories = ReadFileLines(this.categoriesFileName, true);
            return categories
                .Select(c => c.Split(','))
                .Select(c => new category
                {
                    CategoryId = int.Parse(c[0]),
                    CategoryName = c[1],
                    CategoryDescription = c[2]
                });
        }

        public IEnumerable<Product> getAllProducts()
        {
            var products = ReadFileLines(this.productsFileName, true);
            return products
                .Select(p => p.Split(','))
                .Select(p => new Product
                {
                    ProductId = int.Parse(p[0]),
                    ProductName = p[1],
                    CategoryId = int.Parse(p[2]),
                    UnitPrice = decimal.Parse(p[3]),
                    UnitsInStock = int.Parse(p[4]),
                });
        }

        public IEnumerable<Order> getAllOrders()
        {
            var orders = ReadFileLines(this.ordersFileName, true);
            return orders
                .Select(p => p.Split(','))
                .Select(p => new Order
                {
                    OrderId = int.Parse(p[0]),
                    ProductId = int.Parse(p[1]),
                    ProductQuantity = int.Parse(p[2]),
                    PriceDiscount = decimal.Parse(p[3]),
                });
        }
        /// <summary>
        /// Reads a file and writes the lines in a list
        /// </summary>
        /// <param CategoryName="filename"></param>
        /// <param CategoryName="hasHeader"></param>
        /// <returns>
        /// List with all lines from the file
        /// </returns>
        private List<string> ReadFileLines(string filename, bool hasHeader)
        {
            var allLines = new List<string>();
            using (var reader = new StreamReader(filename))
            {
                string currentLine;
                if (hasHeader)
                {
                    reader.ReadLine();
                }
                currentLine = reader.ReadLine();
                while (currentLine != null)
                {
                    allLines.Add(currentLine);
                }
            }

            return allLines;
        }
    }
}
