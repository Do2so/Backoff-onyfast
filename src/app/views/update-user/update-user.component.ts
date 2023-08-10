import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//simport { ToastrService } from 'ngx-toastr';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  getId: any;
  updateform : FormGroup;
  

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
      this.updateform.setValue({
        userFirstName : res.userFirstName,
        userLastName : res.userLastName,
        userPhone : res.userPhone,
        userEmail : res.userEmail,
        username : res.username,
        password : res.password,
      });
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
    if(window.confirm('Voulez vous continuer cette modification?')){
      this.crd.updateUserCopie(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/maintenance'))
        this.toaster.success('Utilisateur modifié avec succès !')
      }, (err) => {
        console.log(err);
        this.toaster.error('Un problème est survenu ! Veuillez vérifier votre connexion internet')
    });
  }
    }

}
