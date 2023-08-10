import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-troncon',
  templateUrl: './update-troncon.component.html',
  styleUrls: ['./update-troncon.component.scss']
})
export class UpdateTronconComponent implements OnInit {

  
  getId: any;
  updateform : FormGroup;
  constructor(     private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute) { 
      this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetTroncon(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        libelleTroncon : res[0].libelleTroncon,
        origineTroncon : res[0].origineTroncon,
        origineLongitude : res[0].origineLongitude,
        extremiteLongitude : res[0].extremiteLongitude,
        longueurTroncon : res[0].longueurTroncon,
        extremiteTroncon : res[0].extremiteTroncon,
        origineLatitude : res[0].origineLatitude,
        extremiteLatitude : res[0].extremiteLatitude,
        capaciteTroncon : res[0].capaciteTroncon,
        description : res[0].description,
      });
    });
    this.updateform = this.formbuilder.group({
        libelleTroncon : [''],
        origineTroncon : [''],
        origineLongitude : [''],
        extremiteLongitude : [''],
        longueurTroncon : [''],
        extremiteTroncon : [''],
        origineLatitude : [''],
        extremiteLatitude : [''],
        capaciteTroncon : [''],
        description : [''],
    });
    }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crd.updateTroncon(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/troncon'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/troncon');
  }
}
