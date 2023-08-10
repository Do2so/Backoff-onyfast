import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isAuth: boolean  = false

  constructor() { }
  
}
