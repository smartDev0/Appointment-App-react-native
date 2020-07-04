import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  payment;
  stripeView = false;
  constructor() {}

  ngOnInit() {}
  setPayment(id) {
    console.log(id);
    this.payment = id;
    if (id == 2) {
      this.stripeView = true;
    } else {
      this.stripeView = false;
    }
  }
  radioGroupChange(event) {
     if (event.detail.value == 2) {
       this.stripeView = true;
     } else {
       this.stripeView = false;
     }
  }
}
