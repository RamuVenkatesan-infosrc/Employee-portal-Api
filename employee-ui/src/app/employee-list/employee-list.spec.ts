import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import './employee-list.css';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent {
  employees: any[] = [];
  editingEmployee: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<any[]>('https://localhost:7263/api/Employees').subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.http.delete(`https://localhost:7263/api/Employees/${id}`).subscribe(() => {
      this.loadEmployees();
    });
  }

  startEdit(emp: any) {
    this.editingEmployee = { ...emp }; // Create a copy for editing
  }

  cancelEdit() {
    this.editingEmployee = null;
  }

  saveEdit() {
    this.http.put(`https://localhost:7263/api/Employees/${this.editingEmployee.id}`, this.editingEmployee)
      .subscribe(() => {
        this.loadEmployees();
        this.editingEmployee = null;
      });
  }
}
