import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  server_url= "http://localhost:3000"

  constructor(private http:HttpClient) { }
  Authenticate(){
    //api call
    return this.http.get(`${this.server_url}/users/1`)
  }
  updateAdmin(admin:any){
    return this.http.put(`${this.server_url}/users/1`,admin)
  }
}
