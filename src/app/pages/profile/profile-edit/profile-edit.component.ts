import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.scss"],
})
export class ProfileEditComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  edit(id) {
    this.router.navigate(["/profile/", id]);
  }
}
