using AspNetCore.SEOHelper.Sitemap;
using Microsoft.AspNetCore.Mvc;
using SayimWeb.Models;
using System.Diagnostics;

namespace SayimWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IWebHostEnvironment _env;

        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment env)
        {
            _logger = logger;
            _env = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult current_projects()
        {
            return View();
        }

        public IActionResult past_projects()
        {
            return View();
        }

        public IActionResult cv_landing()
        {
            return View();
        }

        public IActionResult hobbies()
        {
            return View();
        }

        public IActionResult skills()
        {
            return View();
        }

        public IActionResult work_experience()
        {
            return View();
        }

        public IActionResult privacy()
        {
            return View();
        }

        public ActionResult sitemap()
        {
            var list = new List<SitemapNode>();
            //Need to update with sayimkhan.co.uk/
            list.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.8, Url = "https://codingwithesty.com/serilog-mongodb-in-asp-net-core", Frequency = SitemapFrequency.Daily });
            list.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.8, Url = "https://codingwithesty.com/logging-in-asp-net-core", Frequency = SitemapFrequency.Yearly });
            list.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.7, Url = "https://codingwithesty.com/robots-txt-in-asp-net-core", Frequency = SitemapFrequency.Monthly });
            list.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.5, Url = "https://codingwithesty.com/versioning-asp.net-core-apiIs-with-swagger", Frequency = SitemapFrequency.Weekly });
            list.Add(new SitemapNode { LastModified = DateTime.UtcNow, Priority = 0.4, Url = "https://codingwithesty.com/configuring-swagger-asp-net-core-web-api", Frequency = SitemapFrequency.Never });

            new SitemapDocument().CreateSitemapXML(list, _env.ContentRootPath);
            return Redirect("/sitemap.xml");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}