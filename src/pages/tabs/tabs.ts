import { Component } from '@angular/core';

import { NimcheckerPage } from '../nimchecker/nimchecker';
import { RandomPage } from '../random/random';
import { HomePage } from '../home/home';
import { OthersPage } from '../others/others';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NimcheckerPage;
  tab3Root = RandomPage;
  tab4Root = OthersPage;

  constructor() {

  }
}
