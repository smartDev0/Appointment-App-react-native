import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { BookingComponent } from "./modal/booking/booking.component";


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [BookingComponent],
})
export class SharedModule {}
