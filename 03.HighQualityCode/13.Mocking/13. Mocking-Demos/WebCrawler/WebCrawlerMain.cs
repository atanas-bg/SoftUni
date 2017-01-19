namespace WebCrawler
{
    using System;

    public class WebCrawlerMain
    {
        static void Main()
        {
            var htmlDownloader = new HtmlDownloader();
            var crawler = new Crawler(htmlDownloader);
            var urls = crawler.ExtractImageUrls("http://clubz.bg/");

            int count = 0;
            foreach (var url in urls)
            {
                Console.WriteLine("{0, -3}: {1}", count, url);
                count++;
            }
        }
    }
}
