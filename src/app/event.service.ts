import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _registerUrl = "http://localhost:4200/api/register"
  constructor(private http:HttpClient){}

  registerUser(user: any){
    return this.http.post<any>(this._registerUrl,user)
  }
  login(email:string ,password:string){
    return this.http
    .post
  }
}
