import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome() {
    this.menuCtrl.toggle();
  }
  logout() {
    this.menuCtrl.toggle();
    this.nav.navigateRoot("/login");
  }
  onChangeRoute(name) {
    switch (name) {
      case "home":
        this.menuCtrl.toggle();
        this.nav.navigateRoot("/home");
        break;
      case "appointment":
        this.menuCtrl.toggle();
        this.nav.navigateRoot("/appointment");
        break;
      case "favourite":
        this.menuCtrl.toggle();
        this.nav.navigateRoot("/favourite");
        break;
      case "profile":
        this.menuCtrl.toggle();
        this.nav.navigateRoot("/profile");
        break;
      case "health":
        this.menuCtrl.toggle();
        this.nav.navigateRoot("/health");
        break;
      case "help":
        this.menuCtrl.toggle();
        this.nav.navigateRoot("/help");
        break;
    }
  }
}

