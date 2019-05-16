import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.page.html',
  styleUrls: ['./changes.page.scss'],
})
export class ChangesPage implements OnInit {

  userName: string = "";

  constructor() {
    var userData = JSON.parse(localStorage.getItem('userData'));
    if((userData !== "undefined" || userData !== null)) {
      this.userName = userData.email;
    }
   }

  ngOnInit() {
    
  }

}
