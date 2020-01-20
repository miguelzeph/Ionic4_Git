import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  /* Posso fazer assim tbm... mas dai vai no .html e troca o 'appPages' por 'teste_teste_teste'
  teste_teste_teste : any[]=[
    {titulo:"Home", icone:'home', url:'/home'},
    {titulo:"List", icone:'list', url:'/list'},
    {titulo:"Camera", icone:'camera', url:'/list'},
  ]
  */


  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Instalacao',
      url: '/instalacao',
      icon: 'build'
    },

    {
      title: 'Layout',
      url: '/layout',
      icon: 'copy'

    },

    {
      title: "Componentes",
      url:"/componentes",
      icon: "arrow-dropright"
    },

    {
      title: "Api Externa",
      url:"/api-externa",
      icon: "arrow-dropright"
    },

    {
      title: "Animações",
      url:"/animacoes",
      icon: "arrow-dropright"
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
