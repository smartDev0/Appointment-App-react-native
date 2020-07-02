import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },
  {
    path: "welcome",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/welcome/welcome.module").then((m) => m.WelcomeModule),
      },
    ],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/account/login/login.module").then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/account/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "forgot",
    loadChildren: () =>
      import("./pages/account/forgot/forgot.module").then(
        (m) => m.ForgotPageModule
      ),
  },
  {
    path: "done",
    loadChildren: () =>
      import("./pages/account/done/done.module").then((m) => m.DonePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home/home.module").then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
