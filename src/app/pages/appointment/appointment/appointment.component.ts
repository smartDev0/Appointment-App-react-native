import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"],
})
export class AppointmentComponent implements OnInit {
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
