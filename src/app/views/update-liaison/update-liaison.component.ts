import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-liaison',
  templateUrl: './update-liaison.component.html',
  styleUrls: ['./update-liaison.component.scss']
})
export class UpdateLiaisonComponent implements OnInit {

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
    this.crd.GetLiaison(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
      libelleLiaison : res[0].libelleLiaison,
      origineLiaison : res[0].origineLiaison,
      origineLongitude : res[0].origineLongitude,
      extremiteLongitude : res[0].extremiteLongitude,
      longueurLiaison : res[0].longueurLiaison,
      affaiblissment : res[0].affaiblissment,
      nombreEpissure : res[0].nombreEpissure,
      extremiteLiaison : res[0].extremiteLiaison,
      origineLatitude : res[0].origineLatitude,
      extremiteLatitude : res[0].extremiteLatitude,
      capacite : res[0].capacite,
      nombreTroncon : res[0].nombreTroncon,
      nombreConnecteur : res[0].nombreConnecteur,
      descriptionLiaison : res[0].descriptionLiaison,

      });
    });
    this.updateform = this.formbuilder.group({
      libelleLiaison : [''],
      origineLiaison : [''],
      origineLongitude : [''],
      extremiteLongitude : [''],
      longueurLiaison : [''],
      affaiblissment : [''],
      nombreEpissure : [''],
      extremiteLiaison : [''],
      origineLatitude : [''],
      extremiteLatitude : [''],
      capacite : [''],
      nombreTroncon : [''],
      nombreConnecteur : [''],
      descriptionLiaison : [''],
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crd.updateLiaison(this.getId, this.updateform.value)
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
