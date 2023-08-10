import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-fibre',
  templateUrl: './update-fibre.component.html',
  styleUrls: ['./update-fibre.component.scss']
})
export class UpdateFibreComponent implements OnInit {

  
  getId: any;
  updateform : FormGroup;
  constructor(
    private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute
  ) { 
    this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetFibre(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        numero : res[0].numero,
        type : res[0].type,
        valeurConnecteur : res[0].valeurConnecteur,
        valeurEpissure : res[0].valeurEpissure,
        marge : res[0].marge,
        etat : res[0].etat,
        description : res[0].description,
      });
    });
    this.updateform = this.formbuilder.group({
      numero : [''],
      type : [''],
      valeurConnecteur : [''],
      valeurEpissure : [''],
      marge : [''],
      etat : [''],
      description : [''],
    });
  }

  ngOnInit(): void {
  }
  onUpdate(): any {
    this.crd.updateFibre(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/fibre'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/fibre');
  }


}
