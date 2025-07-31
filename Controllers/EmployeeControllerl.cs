using EmployeesPortal.Model;    // Using the Employee class
using EmployeesPortal.Service;  // Using the service to manage employee logic
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc; // Required for building API controllers

namespace EmployeesPortal.Controllers
{
    [Authorize]
    [ApiController]

    
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
       
        private readonly EmployeeServices _service;

       
        public EmployeesController(EmployeeServices service)
        {
            _service = service;
        }

      
        [HttpGet]
        public IActionResult GetAll()
        {
            var employees = _service.GetAll();
            return Ok(employees); 
        }

       
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var employee = _service.GetById(id);

            if (employee == null)
            {
                return NotFound(); 
            }

            return Ok(employee); 
        }

       
        [HttpPost]
        public IActionResult Create(Employee employee)
        {
            var newEmployee = _service.Add(employee);

            
            return CreatedAtAction(nameof(GetById), new { id = newEmployee.Id }, newEmployee);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Employee employee)
        {
            bool isUpdated = _service.Update(id, employee);

            if (!isUpdated)
            {
                return NotFound(); 
            }

            return NoContent(); 
        }

        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            bool isDeleted = _service.Delete(id);

            if (!isDeleted)
            {
                return NotFound(); 
            }

            return NoContent();
        }
    }
}
