import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {UserDataService} from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clg-api';
  
  users : any;

  // constructor(private userInfo : UserDataService) {
  //   userInfo.users().subscribe((data) => {
  //     console.log("data", data);
  //     this.users = data;
  //   })
  //  }
  
  constructor(private userData : UserDataService) {
    userData.users().subscribe((data) => {
      console.log("data", data);
      this.users = data;
    })
   }

}
