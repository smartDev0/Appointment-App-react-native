import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { BookingConfirmComponent } from "./booking-confirm.component";

const routes: Routes = [
  {
    path: "",
    component: BookingConfirmComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookingConfirmComponent],
})
export class BookingConfirmPageModule {}
