import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  navigate (route) {
    this.router.navigate([route]);
  }

}
