import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss']
})
export class UpdateMessageComponent implements OnInit {

  getId: any;
  updateform : FormGroup;
  constructor(     private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute) { 
      this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetMessage(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        numero : res[0].numero,
        contenu : res[0].contenu,
      });
    });
    this.updateform = this.formbuilder.group({
      numero : [''],
      contenu : [''],
    });
    }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crd.updateMessage(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/message'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/message');
  }
}
