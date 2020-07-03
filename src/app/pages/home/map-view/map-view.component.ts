import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: "app-map-view",
  templateUrl: "./map-view.component.html",
  styleUrls: ["./map-view.component.scss"],
})
export class MapViewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  async presentModal() {}
  goDoctor(id) {
    this.router.navigate(["/doctor/", id]);
  }
}
