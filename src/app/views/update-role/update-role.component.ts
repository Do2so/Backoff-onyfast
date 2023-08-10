import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {

  getId: any;
  updateform : FormGroup;
  constructor(     private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    private activatedroute: ActivatedRoute) { 
      this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetRole(this.getId).subscribe(res => {
      console.log(res);
      this.updateform.setValue({
        libelle : res[0].libelle,
        Description : res[0].Description,
      });
    });
    this.updateform = this.formbuilder.group({
      libelle : [''],
      Description : [''],
    });
    }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crd.updateRole(this.getId, this.updateform.value)
    .subscribe(() => {
        console.log('Mise à jour éffectuée!')
        this.ngzone.run(() => this.router.navigateByUrl('/role'))
      }, (err) => {
        console.log(err);
    });
  }

  Annuler(){
    this.router.navigateByUrl('/role');
  }
}
