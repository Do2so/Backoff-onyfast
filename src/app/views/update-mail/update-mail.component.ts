import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-mail',
  templateUrl: './update-mail.component.html',
  styleUrls: ['./update-mail.component.scss']
})
export class UpdateMailComponent implements OnInit {

  getId: any;
  updateform : FormGroup;
  constructor(     private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute) { 
      this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetMail(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        adresse : res[0].adresse,
        contenu : res[0].contenu,
      });
    });
    this.updateform = this.formbuilder.group({
      adresse : [''],
      contenu : [''],
    });
    }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crd.updateMail(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/mail'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/mail');
  }

}
