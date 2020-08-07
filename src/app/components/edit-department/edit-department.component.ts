import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  department: any
  index: number;
  constructor(

    private departmentService: DepartmentsService,
    private route: ActivatedRoute,
    private router: Router


  ) { }

  ngOnInit(): void {
    this.index = parseInt(this.route.snapshot.paramMap.get('index'))
    this.department = this.departmentService.getDepartmentByIndex(this.index)
  }

  onSubmit(form: NgForm) {
    this.departmentService.updateDepartment(this.index, form.value)
    this.router.navigate(['']);
  }
  navigate (route) {
    this.router.navigate([route]);
  }
}
