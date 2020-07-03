import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from "@angular/core";
import { formatDate } from "@angular/common";
import { AlertController } from "@ionic/angular";
import { CalendarComponent } from "ionic2-calendar";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 4.5,
    loop: true,
    centeredSlides: false,
    autoplay: false,
    speed: 500,
    spaceBetween: 4,
  };
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
