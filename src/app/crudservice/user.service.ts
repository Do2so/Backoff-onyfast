import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  id!: String;
  nom!: String;
  prenom!: String;
  email!: String;
  telephone!: String;
  genre!: String;
  type!: String;
  etat!: String;

}
