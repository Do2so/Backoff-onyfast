import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface userData {
  name?:string,
  email:string,
  password:string
}

const URL_AGENT : string = "http://192.162.68.88/api/agents"
const headers= new HttpHeaders()

  .set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }


  loginUser(dataUser:any):Observable<any>{

    return this.http.post<any>("http://192.162.68.88/api/agents/login", dataUser, {headers:headers})

  }

  createUser(dataUser:any):Observable<any>{

    return this.http.post<any>("192.162.68.88/api/agent/register", dataUser, {headers:headers})

  }

  editUser(dataUser: any): Observable<any>{

    return this.http.post('http://127.0.0.1:3000/users/update', dataUser, {headers: headers})

  }

  deleteUser(dataUser: any): Observable<any> {

    return this.http.post('http://127.0.0.1:3000/users/delete', dataUser, {headers: headers})

  }

}

