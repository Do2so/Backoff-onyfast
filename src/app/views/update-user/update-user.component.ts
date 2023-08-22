import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  getId: any;
  updateform : FormGroup;
  userFirstName :any 
  userLastName :any
  userPhone : any
  userEmail : any
  username :any 
  password : any

  

  constructor(
    private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute,
    private toaster : ToastrService
  ) { 
    this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetUserByID(this.getId).subscribe(res => {
      console.log(res);
      this.userFirstName = res.userFirstName
      this.userLastName = res.userLastName
      this.userPhone = res.userPhone
      this.userEmail = res.userEmail
      this.username=  res.username
      this.password = res.password
    });
    this.updateform = this.formbuilder.group({
      userFirstName : [''],
      userLastName : [''],
      userPhone : [''],
      userEmail : [''],
      username : [''],
      password : ['']
    });
  }

  showToast() {
    this.toaster.success('Bonjour !')
  }

  onUpdate(): any {
    const client : any ={
      userFirstName : this.userFirstName,
      userLastName : this.userLastName,
      userPhone : this.userPhone,
      userEmail : this.userEmail,
      username : this.username ,
      password : this.password
    }
    console.log(client)
    if(window.confirm('Voulez vous continuer cette modification?')){
      this.crd.updateUserCopie(this.getId, client)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/maintenance'))
        this.toaster.success('Utilisateur modifié avec succès !')
      }, (err) => {
        console.log(err);
        this.toaster.error('Un problème est survenu !')
    });
  }
    }

}
