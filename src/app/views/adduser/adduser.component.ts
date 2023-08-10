import { Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  formroup : FormGroup;
  constructor(private router: Router,
              private crd: OperationsService,
              public formbuilder : FormBuilder,
              private ngzone: NgZone,) { 

                this.formroup = this.formbuilder.group({
                  nom : [''],
                  prenom : [''],
                  email : [''],
                  genre : [''],
                  telephone : [''],
                  type : [''],
                  etat : [''],
                })
              }

  ngOnInit(): void {
  }

  Annuler(){
    this.router.navigateByUrl('/agent');
  }

  onSubmit() :any {
    this.crd.AddUser(this.formroup.value).subscribe(()=> {
      console.log('utilisateur ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/agent'));
      },(err)=>{
        console.log(err);
      });
  }
}
