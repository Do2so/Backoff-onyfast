import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
import { CommonService } from 'src/app/services/common.service';


interface Utilisateur{
  password : string;
  agentFirstName : string;
  agentLastName : string;
  agentBirthDate: string;
  agentGender : string;
  agentPhone : string;
  agentEmail : string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  [x: string]: any;

  Users:any = [];
  public user: any=[]
  //public user: any=[];

  getId: any;
  //updateform : FormGroup;

  constructor( private readonly router: Router, 
               public commonService: CommonService ,
               private crd: OperationsService,
               private ngzone: NgZone,
               private activatedroute: ActivatedRoute
               ) 
               { 
                this.getId = this.activatedroute.snapshot.paramMap.get('id');
               }
public uti: Utilisateur={
  password: this.user.password,
  agentFirstName : this.user.agentFirstName,
  agentLastName  :this.user.agentLastName,
  agentBirthDate   :this.user.agentBirthDate,
  agentGender      :this.user.agentGender,
  agentPhone       :this.user.agentPhone,
  agentEmail    :this.user.agentEmail
}
  ngOnInit(): void {

    this.user = JSON.parse(Object(window.localStorage.getItem('token')));
    this.uti.password=this.user.password;

  }

  Onsubmit(): any {
    this.crd.updatePassword(this.getId, this.uti.password)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/liaison'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/liaison');
  }
}
