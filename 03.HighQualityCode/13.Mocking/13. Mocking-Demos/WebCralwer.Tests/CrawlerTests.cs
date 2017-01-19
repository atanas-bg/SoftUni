using Moq;

namespace WebCralwer.Tests
{
    using System;
    using System.Linq;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using WebCrawler;

    [TestClass]
    public class CrawlerTests
    {
        [TestMethod]
        public void ExtractImageUrls_Should_Return_Collection_Of_Image_Src_Content()
        {
            //var fakeHtml = new FakeHtmlDownloader();
            var mock = new Mock<IHtmlDownloader>();
            mock.Setup(r => r.DownloadHtml(It.IsNotNull<string>()))
                .Returns("<html>" +
                         "<img src=\"nakov.png\"/>" +
                         "<span>Hello</span>" +
                         "<img src=\"courses/inner/background.jpeg\"/>" +
                         "</html>");

            mock.Setup(h => h.DownloadHtml(It.Is((string url) => url == null)))
                .Throws(new ArgumentNullException("Url address can not be empty."));


            // Arrange
            var crawler = new Crawler(mock.Object);//fakeHtml

            var expectedImageUrls = new[]
            {
                // What to expect?
                "nakov.png",
                "courses/inner/background.jpeg"
            };

            // Act
            var imageUrls = crawler.ExtractImageUrls(string.Empty)
                .ToList();


            // Assert
            CollectionAssert.AreEqual(expectedImageUrls, imageUrls);
        }

        [TestMethod]
        public void Zero()
        {
            var mock = new Mock<Random>();
            mock.Setup(r => r.Next()).Returns(0);
            for (int i = 0; i < 100; i++)
            {
                var num = mock.Object.Next();
                Assert.AreEqual(0, num);
            }
        }
    }
}
