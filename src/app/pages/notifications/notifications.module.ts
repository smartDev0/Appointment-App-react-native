import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { NotificationsComponent } from "./notifications.component";

const routes: Routes = [
  {
    path: "",
    component: NotificationsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NotificationsComponent],
})
export class NotificatiosPageModule {}
