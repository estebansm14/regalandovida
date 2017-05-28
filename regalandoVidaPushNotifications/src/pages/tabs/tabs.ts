import { Component } from '@angular/core';



import { HomePage } from '../home/home';
import {NotificationsPage} from "../notifications/notifications";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotificationsPage;


  constructor() {

  }
}
