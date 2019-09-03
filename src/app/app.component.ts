import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  list = [
    { key : 'George Washington', value :  1789},
    { key :    'John Adams', value : 1796},
    { key :    'Thomas Jefferson', value : 1800},
    { key :     'James Madison', value : 1808},
    { key :    'James Monroe', value : 1812}
  ]

  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}