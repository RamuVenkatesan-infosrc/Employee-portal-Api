using EmployeePortal.Models;
using EmployeesPortal.Model;
using EmployeesPortal.Service;
using Microsoft.AspNetCore.Mvc;

namespace EmployeesPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly TokenService _tokenService;

        public AuthController(TokenService tokenService)
        {
            _tokenService = tokenService;
        }

        private readonly List<User> _users = new List<User>()
        {
            new User { Username = "admin", Password = "password123" }
        };

        [HttpPost("login")]
        public IActionResult Login(User user)
        {
            var validUser = _users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);

            if (validUser == null)
                return Unauthorized("Invalid username or password");

            var token = _tokenService.GenerateToken(user);
            return Ok(new { Token = token });
        }
    }
}
