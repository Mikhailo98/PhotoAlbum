using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace PhotoAlbum.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "angular",
               url: "{*url}",
               defaults: new { controller = "Home", action = "Index" }
               );


            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional });

           

        }
    }

    //public class ServerRouteConstrains : IRouteConstraint
    //{

    //    private readonly Func<Uri, bool> _predicate;

    //    public ServerRouteConstrains(Func<Uri, bool> predicate)
    //    {
    //        this._predicate = predicate;
    //    }

    //    public bool Match(HttpContextBase httpContext, Route route, string parameterName,
    //        RouteValueDictionary values, RouteDirection routeDirection)
    //    {
    //        return this._predicate(httpContext.Request.Url);
    //    }
    //}

}
