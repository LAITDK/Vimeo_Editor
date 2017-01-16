using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using %SolutionName%.Classes.Cms.MediaTypes;
using %SolutionName%.Models;
using Umbraco.Web;

namespace %SolutionName%.Controllers
{
    public class VideoSurfaceController : Umbraco.Web.Mvc.SurfaceController
    {
        // GET: VideoSurface
        public ActionResult RenderVimeoMedia(string mediaId)
        {
            var model = new VimeoViewModel();
            var mediaItem = Umbraco.TypedMedia(mediaId);

            if (mediaItem.DocumentTypeAlias == MediaTypes.Vimeo)
            {
                model.VimeoEmbedCode = mediaItem.GetPropertyValue(MediaTypes.Vimeo.VimeoEmbedUrl);
                
            }

            return PartialView("~/Views/Partials/_VimeoVideo.cshtml", model);
        }
        [HttpGet]
        public ContentResult GetImageUrl(string mediaId)
        {
            string url = null;
            var mediaItem = Umbraco.TypedMedia(mediaId);
            
                // get img id
                if (mediaItem != null)
                {
                    url = mediaItem.Url;
                }
                
            

            return Content(url);
        }
    }
}