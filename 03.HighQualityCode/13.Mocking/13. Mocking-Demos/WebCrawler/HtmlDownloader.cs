using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace WebCrawler
{
    class HtmlDownloader : IHtmlDownloader
    {
        public string DownloadHtml(string url)
        {
            var client = new WebClient();
            var html = client.DownloadString(url);

            return html;
        }
    }
}
