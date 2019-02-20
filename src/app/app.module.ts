import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AngularFireModule } from 'angularfire2/';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBX6BMaVOgNRtyyb83b-o6skkMA9dqpQQg",
  authDomain: "silvercare.firebaseapp.com",
  databaseURL: "https://silvercare.firebaseio.com",
  projectId: "silvercare",
  storageBucket: "silvercare.appspot.com",
  messagingSenderId: "412171960250"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessagePage,
    ProfilePage,
    SearchPage,
    LandingPage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessagePage,
    ProfilePage,
    SearchPage,
    SignupPage,
    LoginPage,
    LandingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Keyboard,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
