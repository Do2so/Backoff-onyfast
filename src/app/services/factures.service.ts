import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers = new HttpHeaders().set('content-type', 'application/json')
const API_URL = 'http://127.0.0.1:3000'

@Injectable({
  providedIn: 'root'
})
export class FacturesService {

  constructor(private readonly http: HttpClient ) { }

  getFacturesOf(nBranc: string): Observable<any> {

    const id = {id: nBranc}

    console.log('FACTURE SERVICE SAY: ID OF BRANC IS ', id)

    return this.http.post<string>(`${API_URL}/factures/get-all-for-branc`, id, {headers: headers})

  }

  getAllFactures(): Observable<any> {

    return this.http.get<any>(`${API_URL}/factures/get`)
    
  }

}


// ghGH
