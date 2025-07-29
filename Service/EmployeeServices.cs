using EmployeesPortal.Model; 
using System.Xml.Linq;
using System.Collections.Generic;
using System.Linq;

namespace EmployeesPortal.Service
{
    
    public class EmployeeServices
    {
       
        private readonly List<Employee> employees = new List<Employee>();

        
        private int nextId = 1;

       
        public List<Employee> GetAll()
        {
            return employees;
        }

        
        public Employee? GetById(int id)
        {
            return employees.FirstOrDefault(e => e.Id == id);
        }

       
        public Employee Add(Employee employee)
        {
            employee.Id = nextId++;     
            employees.Add(employee);    
            return employee;             
        }

      
        public bool Update(int id, Employee updated)
        {
            var employee = GetById(id); 
            if (employee == null) return false; 

            
            employee.Name = updated.Name;
            employee.Designation = updated.Designation;
            employee.Department = updated.Department;
            employee.Salary = updated.Salary;

            return true; 
        }

       
        public bool Delete(int id)
        {
            var employee = GetById(id);  
            if (employee == null) return false; 

            employees.Remove(employee); 
            return true; 
        }
    }
}
