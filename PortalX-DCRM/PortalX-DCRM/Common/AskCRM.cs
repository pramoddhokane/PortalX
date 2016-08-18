using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalX_DCRM.Models;
using Microsoft.Xrm.Client;
using Microsoft.Xrm.Client.Services;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System.Net.Http;

namespace PortalX_DCRM
{
    public class AskCRM
    {
        #region Class Level Members
        private static OrganizationService _orgService;
        private static CrmConnection _connection;
        #endregion

        #region UserModule
        public static User findUser(string Username, string Password)
        {
            _connection = CrmConnection.Parse(Common.getCrmConnection());

            try
            {
                using (_orgService = new OrganizationService(_connection))
                {

                    QueryExpression query = new QueryExpression("contact");
                    query.ColumnSet.AddColumns("contactid", "portalx_username", "portalx_password", "portalx_isvalid");
                    query.Criteria = new FilterExpression();
                    query.Criteria.AddCondition("portalx_username", ConditionOperator.Equal, Username);
                    query.Criteria.AddCondition("portalx_password", ConditionOperator.Equal, Password);


                    EntityCollection UserRecord = _orgService.RetrieveMultiple(query);

                    if (UserRecord.Entities.Count > 0)
                    {
                        return new User
                        {
                            Id = (Guid)UserRecord[0]["contactid"],
                            Username = UserRecord[0]["portalx_username"].ToString(),
                            Password = UserRecord[0]["portalx_password"].ToString(),
                            isValid = Convert.ToBoolean(UserRecord[0]["portalx_isvalid"])
                        };
                    }
                    else
                    {
                        return new User
                        {
                            Username = string.Empty,
                            Password = string.Empty,
                            isValid = false
                        };

                    }
                }

            }
            catch (Exception)
            {

                return null;
            }
        }
        public static Boolean findUser(string Username)
        {
            _connection = CrmConnection.Parse(Common.getCrmConnection());

            try
            {
                using (_orgService = new OrganizationService(_connection))
                {

                    QueryExpression query = new QueryExpression("contact");
                    query.ColumnSet.AddColumns("contactid", "portalx_username");
                    query.Criteria = new FilterExpression();
                    query.Criteria.AddCondition("portalx_username", ConditionOperator.Equal, Username);

                    EntityCollection UserRecord = _orgService.RetrieveMultiple(query);

                    if (UserRecord.Entities.Count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;

                    }
                }

            }
            catch (Exception)
            {
                throw;
            }
        }

        public static Boolean updateUser(User updateUser)
        {
            return true;
        }

        public static User createUser(User createUser)
        {
            if (findUser(createUser.Username))
            {
                return createUser;
            }
            else
            {
                try
                {
                    using (_orgService = new OrganizationService(_connection))
                    {
                        Entity _contact = new Entity("contact");

                        _contact["fullname"] = createUser.FullName;
                        _contact["portalx_username"] = createUser.Username;
                        _contact["portalx_password"] = createUser.Password;
                        _contact["emailaddress1"] = createUser.Email;
                        _contact["portalx_isvalid"] = createUser.isValid;
                        _contact["mobilephone"] = createUser.MobilePhone;
                       // _contact["BussinessPhone"] = createUser.BussinessPhone;

                        
                        createUser.Id = _orgService.Create(_contact);
                        return createUser;
                    }
                }
                catch (Exception)
                {

                    throw;
                }
            }

        }
        #endregion
    }
}