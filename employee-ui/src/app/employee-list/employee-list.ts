import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import './employee-list.css';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent {
  employees: any[] = [];
  newEmployee = { name: '', designation: '', department: '', salary: 0 };
  editId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<any[]>('https://localhost:7263/api/Employees').subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee() {
    this.http.post('https://localhost:7263/api/Employees', this.newEmployee).subscribe(() => {
      this.newEmployee = { name: '', designation: '', department: '', salary: 0 };
      this.loadEmployees();
    });
  }

  deleteEmployee(id: number) {
    this.http.delete(`https://localhost:7263/api/Employees/${id}`).subscribe(() => {
      this.loadEmployees();
    });
  }

  startEdit(id: number) {
    this.editId = id;
  }

  saveEdit(emp: any) {
    this.http.put(`https://localhost:7263/api/Employees/${emp.id}`, emp).subscribe(() => {
      this.editId = null;
      this.loadEmployees();
    });
  }
}
