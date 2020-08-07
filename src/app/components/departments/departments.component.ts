import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: any;
  constructor(
    private departmentService: DepartmentsService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments()
    console.log( this.departments)
  }

  editDepartment(index): void {
    console.log(index)
    this.router.navigate(['create', index]);

  }

  deleteDepartment (name) :void {
    Swal.fire({
      title: "Are you sure?",
      text: "are you sure you want to remove this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Done",
          "department is deleted",
          "success"
        ).then((ok) => {
          if (ok.value) {
            this.departmentService.removeDepartment(name)

          }
        });
      }
    });
    // console.log( this.departments)
  }

}
