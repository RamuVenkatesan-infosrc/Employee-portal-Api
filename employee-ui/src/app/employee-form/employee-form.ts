import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import './employee-form.css';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.html'
})
export class EmployeeFormComponent {
  employee = { id: 0, name: '', designation: '', department: '', salary: 0 };
  isEditMode = false;  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;  
      this.http.get<any>(`https://localhost:7263/api/Employees/${id}`).subscribe(data => {
        this.employee = data;
      });
    }
  }

  saveEmployee() {
    if (this.isEditMode) {
      this.http.put(`https://localhost:7263/api/Employees/${this.employee.id}`, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.http.post('https://localhost:7263/api/Employees', this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
