import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = MessagePage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
