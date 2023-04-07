import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string="http://localhost:1111"
  constructor(private http:HttpClient) { }

  addUser(data:any)
  {
    return this.http.post(`${this.baseUrl}/addUser`,data);
  }

  userSignIn(data:any)
  {
    return this.http.post(`${this.baseUrl}/checkUser`,data)
  }
}
