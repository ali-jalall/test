import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  departments: any = [];

  constructor() {}

  addDepartment(department) {
    this.departments.push(department);
    console.log(this.departments);
  }

  getDepartments() {
    return this.departments;
  }

  getDepartmentByIndex(index) {
    return this.departments[index]
  }

  removeDepartment(index) {
    this.departments.splice(index, 1)
  }

  updateDepartment(index, data) {
    this.departments.splice(index, 1, data)
  }
}
