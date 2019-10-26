import { Component } from '@angular/core';

import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// many new imports that werent in the default tabs file


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPage = [
    {
      title: 'About',
      url: '/members/tab1',
      icon: 'ios-contact'
    },
    {
      title: 'CV',
      url: '/members/tab2',
      icon: 'ios-finger-print'
    },
    {
      title: 'Portfolio',
      url: '/members/tab3',
      icon: 'ios-key'
    },
    {
      title: 'Activities',
      url: '/members/tab4',
      icon: 'ios-aperture'
    },
    {
      title: 'Contact',
      url: '/members/tab5',
      icon: 'ios-at'
    }
// Here is the routing for the tabs!
  ];
  user: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theme: ThemeService,
    private auth: AuthService
  ) {
    this.initializeApp();
  }
  enableDark() {
    this.theme.enableDark();
  }
  enableLight() {
    this.theme.enableLight();
    // Here the enabling for the dark mode and light mode buttons is.
    // routing from app.component.html - here - theme.service.ts
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }
// log out authorisations. not sure why it is not happy with the "user"
  logout() {
    this.auth.logout();
  }
}
