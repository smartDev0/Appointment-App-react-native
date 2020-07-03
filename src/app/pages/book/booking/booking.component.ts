import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from "@angular/core";
import { formatDate } from "@angular/common";
import { AlertController } from "@ionic/angular";
import { CalendarComponent } from "ionic2-calendar";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
})
export class BookingComponent implements OnInit {
  event = {
    title: "",
    desc: "",
    startTime: "",
    endTime: "",
    allDay: false,
  };
  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;
  calendar = {
    mode: "month",
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit() {
    this.resetEvent();
  }
  resetEvent() {
    this.event = {
      title: "",
      desc: "",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false,
    };
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
}
