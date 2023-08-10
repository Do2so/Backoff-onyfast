import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash'
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-create-auth',
  templateUrl: './create-auth.component.html',
  styleUrls: ['./create-auth.component.scss']
})
export class CreateAuthComponent implements OnInit {

  text: string = ''

  showBanner:boolean = false

  constructor( private readonly authService: AuthService, private router: Router ) { }

  ngOnInit(): void {

  }

  createAccount (event: NgForm) {

    if (
    !(_.isEmpty(event.value.prenom)) &&
    !(_.isEmpty(event.value.nom)) &&
    !(_.isEmpty(event.value.email)) &&
    !(_.isEmpty(event.value.username)) &&
    !(_.isEmpty(event.value.password)) &&
    !(_.isEmpty(event.value.confpassword))
    ) {

      console.log('[FORM DATAS]', event.value)



      if (event.value.password === event.value.confpassword) {


       const user = {

         prenom:      event.value.prenom,

         nom:         event.value.nom,

         email:       event.value.email,

         username:    event.value.username,

         password:    event.value.password

       }

       console.log( '[ USER ]' , user)

      this.authService.createUser(user).subscribe({
        next: (data: any) => {

          console.log('DATAS RESULTS', data)


          if(data.affectedRows) {

            this.showBanner = true

            this.text = "Vos données ont été enrégistré avec succès!"

            setTimeout(() => {

            this.showBanner = false

            this.text = ''

            window.localStorage.setItem('token', JSON.stringify(user))

            this.router.navigate(['/home'])

            }, 2000)

          } else {

            this.showBanner = true

            this.text = "Une erreur est survenue au niveau du serveur!"

          }





        },
        error: (err) => {

          console.log('[DATAS RESULTS ERROR]', err);

        }
      })

      } else {


        this.text = 'Les mots de passe ne corresponent pas!'

        this.showBanner = true

        event.value.password = ''

        event.value.confpassord = ''

        console.log(event.value.password);


      }

    }else {

      this.text = 'Veuillez renseigner les champs vides!'

      this.showBanner = true

    }

  }

}
