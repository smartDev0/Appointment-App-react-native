import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { BookingComponent } from "./booking.component";
import { NgCalendarModule } from "ionic2-calendar";
const routes: Routes = [
  {
    path: "",
    component: BookingComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,NgCalendarModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookingComponent],
})
export class BookingPageModule {}
