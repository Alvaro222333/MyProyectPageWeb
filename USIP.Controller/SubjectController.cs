using System.Net;
using System.Net.Http;
using System.Web.Http;
using USIP.Model;

namespace USIP.Controller
{
	[AllowAnonymous]
	public class SubjectController : BaseController
	{
		[HttpGet]
		public HttpResponseMessage GetAll()
		{
			var subjects = Repository<Subject>()
				.Select(course => true);

			return Request.CreateResponse(
				HttpStatusCode.OK,
				new
				{
					subjects
				});
		}

		[HttpPost]
		public HttpResponseMessage Insert(Subject subject)
		{
			var response = Repository<Subject>()
				.Insert(subject);

			return response != null
				? Request.CreateResponse(HttpStatusCode.OK, response)
				: Request.CreateResponse(HttpStatusCode.BadRequest);
		}

		[HttpPut]
		public HttpResponseMessage Update(Subject subject)
		{
			var response = Repository<Subject>()
				.Update(subject);

			return response > 0
				? Request.CreateResponse(HttpStatusCode.OK)
				: Request.CreateResponse(HttpStatusCode.BadRequest);
		}

		[HttpDelete]
		public HttpResponseMessage Delete(int id)
		{
			var response = Repository<Subject>()
				.Delete(subject => subject.Id.Equals(id));

			return response > 0
				? Request.CreateResponse(HttpStatusCode.OK)
				: Request.CreateResponse(HttpStatusCode.BadRequest);
		}
	}
}
