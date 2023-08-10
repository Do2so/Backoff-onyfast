import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash'
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../service/auth.service';


interface DataUser {
  username: string,
  password: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

/**
 * @public authSucced => event to send to the parent to see him if isAuth attribute can take true value in order to show the side menu
 * @public text       => the text to show in the top banner of form
 * @public showBanner => the state of banner
 */
export class AuthComponent implements OnInit {


  //Attributes

  @Output()

  public authSucced: EventEmitter<boolean> = new EventEmitter<boolean>(false)

  text: string = "Aucune correspondance"

  showBanner: boolean = false

  badInput: boolean = false

  public dataUser: DataUser = {
    username : '',
    password : ''
  }



  //Methods


  constructor(
    private readonly authService:AuthService ,
    private readonly router:Router,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {  if (this.commonService.isAuth) {  this.commonService.isAuth = false; window.localStorage.clear(); console.log('[AUTHENTIFICATION]',  this.commonService.isAuth); } }

  login(){

    console.log('[EVENT.VALUE]', this.dataUser)

    if(!_.isEmpty(this.dataUser.username) && !_.isEmpty(this.dataUser.password)){

      this.authService.loginUser(this.dataUser).subscribe({

        next:(data:any) =>{

          if(data){

            window.localStorage.setItem('token',JSON.stringify(data))

            window.localStorage.setItem('username', JSON.stringify(data.username))

            this.router.navigate(['/dashboard'])

            this.authSucced.emit(true)

            this.commonService.isAuth = true

            // console.log('[AUTHENTIFICATION =>]', 'RELEASED WITH SUCCESS');

          } else {

            this.showBanner = true

            this.text = "Nom d'utilisateur ou mot de passe incorrect!"

            this.dataUser.username = ''

            this.dataUser.password = ''

          }

          // console.log('[DATA USER LOADED WITH SUCCES]',data)
        },
        error: (err) => {

          this.showBanner = true

          this.text ="Problème de connexion au serveur!"

          console.log('[DATA USER ERROR]',err)
        }
      })
    }else{

      this.showBanner = true

      this.text = 'Veuillez renseigner tous les champs!'

    }

    //Passage sans tenir compte du control

    // window.localStorage.setItem('token', JSON.stringify(this.dataUser))

    this.router.navigate(['/dashboard'])

    this.authSucced.emit(true)

    // Fin du passage

  }

  hideBanner (): void {

    this.showBanner = false

  }

}


