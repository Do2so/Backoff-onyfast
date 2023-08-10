import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IAbonnes {
  ncli: string,
  ref: string,
  branch: number,
  impayes: boolean
}

interface IRegAbonne {

}


const headers = new HttpHeaders().set('content-type', 'application/json')

const API_URL = 'http://127.0.0.1:3000'

@Injectable({
  providedIn: 'root'
})
export class AbonnesService {



  public abonnes!: IAbonnes[]

  constructor( private readonly http: HttpClient ) {  }

  public getAbonnes(): Observable<any> {

    return this.http.get<any>(`${API_URL}/abonnes/get`);

  }

  public getSimpleInformations (): Observable<any> {

    return this.http.get<any> (`${API_URL}/abonnes/get-simple`)

  }

  public getById (nCli: string): Observable<any> {

    const id = {id: nCli}

    return this.http.post<string> (`${API_URL}/abonnes/get-by-id`, id, {headers: headers} )

  }

  public getByIdBranch (nBranch: string): Observable<any> {

    return this.http.post<string> (`${API_URL}/abonnes/get-by-id-branch`, {nBranch: nBranch}, {headers: headers} )

  }

  public registerAbonne (datas: any): Observable <any> {

    return this.http.post<any>(`${API_URL}/abonnes/register`, datas, {headers: headers})

  }

}
