import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {

  getId: any;
  updateform : FormGroup;
  constructor(     private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute) { 
      this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetService(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        libelle : res[0].libelle,
        description : res[0].description,
        etat : res[0].etat
      });
    });
    this.updateform = this.formbuilder.group({
      libelle : [''],
      description : [''],
      etat : [''],
    });
    }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crd.updateService(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/service'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/service');
  }

}
