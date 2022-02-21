import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }
  // url = "https://custom-web-api.herokuapp.com/api/v1/users";
  // url = "https://jsonplaceholder.typicode.com/posts"
  url = " http://localhost:8000/clg-api";

  users(){
    return this.http.get(this.url);
  }

  saveUsers(data : any){
    return this.http.post(this.url, data);
  }

}
