using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Xrm.Client;
using Microsoft.Xrm.Client.Services;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PortalX_DCRM.Models;
using System.Net.Http;
using System.Net;

namespace PortalX_DCRM.Controllers
{
    public class UserController : ApiController
    {

        [Route("api/user/createuser")]
        [HttpPost]
        public HttpResponseMessage createUser(User user)
        {
            HttpRequestMessage request = new HttpRequestMessage();
            request.SetConfiguration(new HttpConfiguration());

            if (AskCRM.createUser(user))
            {
                return request.CreateResponse(HttpStatusCode.OK, user);
            }
            else
            {
                return request.CreateResponse(HttpStatusCode.Conflict);
            }
        }

        [Authorize]
        [Route("api/user/updateuser")]
        [HttpPost]
        public HttpResponseMessage updateUser(User user)
        {
            HttpRequestMessage request = new HttpRequestMessage();
            request.SetConfiguration(new HttpConfiguration());

            if (AskCRM.updateUser(user))
            {
                return request.CreateResponse(HttpStatusCode.OK, user);
            }
            else
            {
                return request.CreateResponse(HttpStatusCode.Ambiguous);
            }
        }


    }
}