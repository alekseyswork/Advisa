using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReadHeadShop.Models;

namespace ReadHeadShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        [HttpGet("GetAll/{num}")]
        public IActionResult GetAll(int num = 10)
        {
            var sampleQuizzes = new List<CategoryViewModel>();
            // add a first sample quiz
            sampleQuizzes.Add(new CategoryViewModel()
            {
                Id = 1,
                Title = "Which Shingeki No Kyojin character are you?",
                Description = "Anime-related personality test",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });
            // add a bunch of other sample quizzes
            for (int i = 2; i <= num; i++)
            {
                sampleQuizzes.Add(new CategoryViewModel()
                {
                    Id = i,
                    Title = String.Format("Sample category {0}", i),
                    Description = "This is a sample quiz",
                    CreatedDate = DateTime.Now,
                    LastModifiedDate = DateTime.Now
                });
            }
            // output the result in JSON format
            return new JsonResult(
            sampleQuizzes,
            new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            });
        }
    }
}