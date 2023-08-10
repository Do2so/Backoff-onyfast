import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const headers = new HttpHeaders().set('content-type', 'application/json')
const API_URL = 'http://127.0.0.1:3000'

@Injectable({
  providedIn: 'root'
})
export class BranchementsService {

  constructor( private readonly http: HttpClient ) { }

  getBranchements (): Observable<any> {

    return this.http.get(`${API_URL}/branchements/get`)

  }

  getBranchementsOf(nCli: any): Observable<any> {

    const id = {id: nCli}

    console.log('ID VALUE', id)

    return this.http.post<string>(`${API_URL}/branchements/all-for-client`, id, {headers: headers})

  }

}
