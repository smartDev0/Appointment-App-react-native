import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
})
export class DoctorComponent implements OnInit {
  segment = 0;
  refresherEvent: any;
  constructor(private router: Router) {}

  ngOnInit() {}
  segmentChanged(event) {}
  changeSlide(e) {
    this.segment = e;
    if (this.refresherEvent) {
      this.refresherEvent.target.complete();
    }
  }
  doRefresh(event) {
    // this.refresherEvent = event;
    // switch (this.segment) {
    //   case 0:
    //     break;
    //   case 1:
    //     break;
    // }
  }
  goReview(id) {
    this.router.navigate(["/rate/", id]);
  }
}
