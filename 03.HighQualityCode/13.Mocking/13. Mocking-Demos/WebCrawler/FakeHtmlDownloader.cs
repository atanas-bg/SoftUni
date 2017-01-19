using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebCrawler
{
    public class FakeHtmlDownloader : IHtmlDownloader
    {
        public string DownloadHtml(string url)
        {
            string fakeHtml = "<html>" +
                              "<img src=\"nakov.png\"/>" +
                              "<span>Hello</span>" +
                              "<img src=\"courses/inner/background.jpeg\"/>" +
                              "</html>";

            return fakeHtml;
        }
    }
}
