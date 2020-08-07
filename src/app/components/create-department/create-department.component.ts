import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css'],
})
export class CreateDepartmentComponent implements OnInit {

  constructor(
    private router: Router,
    private departmentService: DepartmentsService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.departmentService.addDepartment(form.value)
    this.router.navigate(['']);
  }

  navigate(route) {
    this.router.navigate([route]);
  }
}
