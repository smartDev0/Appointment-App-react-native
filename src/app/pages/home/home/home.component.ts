import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
