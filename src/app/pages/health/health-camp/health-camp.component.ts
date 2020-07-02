import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-health-camp",
  templateUrl: "./health-camp.component.html",
  styleUrls: ["./health-camp.component.scss"],
})
export class HealthCampComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  gotoView(id) {
    this.router.navigate(["/health/", id]);
  }
}
