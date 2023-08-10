import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-maintenance',
  templateUrl: './update-maintenance.component.html',
  styleUrls: ['./update-maintenance.component.scss']
})
export class UpdateMaintenanceComponent implements OnInit {

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
    this.crd.GetMaintenance(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        libelle : res[0].libelle,
        lieu : res[0].lieu,
        longitudeLieu : res[0].longitudeLieu,
        latitudeLieu : res[0].latitudeLieu,
        liaison : res[0].liaison,
        nombreEpissure : res[0].nombreEpissure,
        cause : res[0].cause,
        actionEntrep : res[0].actionEntrep,
        materielUse : res[0].materielUse
      });
    });
    this.updateform = this.formbuilder.group({
      libelle : [''],
      lieu : [''],
      longitudeLieu : [''],
      latitudeLieu : [''],
      liaison : [''],
      nombreEpissure : [''],
      cause : [''],
      actionEntrep : [''],
      materielUse : ['']
    });
  }

  ngOnInit(): void {
  }
  onUpdate(): any {
    this.crd.updateMaintenance(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/maintenance'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/maintenance');
  }

}
