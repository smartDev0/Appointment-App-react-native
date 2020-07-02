import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit {
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 4.5,
    loop: true,
    centeredSlides: false,
    autoplay: false,
    speed: 500,
    spaceBetween: 4,
  };
  cardOption = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: true,
    autoplay: false,
    speed: 500,
    centeredSlides: true,
    spaceBetween: 4,
  };

  constructor() {}

  ngOnInit() {}
}
