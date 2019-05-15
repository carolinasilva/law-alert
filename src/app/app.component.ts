import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  pages = [
    {
      title: 'Sair',
      url: '/tabs/changes',
      icon: 'log-out'
    }
  ];

  errorMessage: string = '';

  currentUser: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router,
    private authService: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event instanceof NavigationEnd && event.url === '/login') {
    //     console.log('login 1');
    //   }
    //   else {
    //     if((window.localStorage.getItem('logedUser') === "undefined" || window.localStorage.getItem('logedUser') === null)) {
    //       //this.router.navigate(["/login"]);
    //       this.menuCtrl.enable(false);
    //     } else {
    //       this.router.navigate(["/tabs/changes"]);
    //     }
    //     this.menuCtrl.enable(true);
    //   }
    // });

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {
          return p['active'] = (event.url === p.url);
        });
      }
    });
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(["/login"]);
      this.menuCtrl.enable(false);
      localStorage.clear(); //becausae i have information from user
    }, err => {
      this.errorMessage = err.message;
      console.log(err)
    });
  }
}
