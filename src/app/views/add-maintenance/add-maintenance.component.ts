import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';

interface maintenance{
  libelle : string,
  lieu : string,
  longitudeLieu : string,
  latitudeLieu : string,
  liaison : string,
  nombreEpissure : number,
  cause : string,
  actionEntrep : string,
  materielUse : string,
  username : string
}

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.scss']
})
export class AddMaintenanceComponent implements OnInit {
  //formroup : FormGroup;
  public user: any=[];
  constructor(  private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone ) { 
      /*this.formroup = this.formbuilder.group({
        libelle : [''],
        lieu : [''],
        longitudeLieu : [''],
        //dateCreation : [''],
        latitudeLieu : [''],
        liaison : [''],
        nombreEpissure : [''],
        cause : [''],
        actionEntrep : [''],
        materielUse : [''],
      })*/
    }



  ngOnInit(): void {
    this.user = JSON.parse(Object(window.localStorage.getItem('token')));
    this.maint.username=this.user.username
  }

 public maint: maintenance={
    libelle : '',
    lieu : '',
    longitudeLieu : '',
    latitudeLieu : '',
    liaison : '',
    nombreEpissure:0,
    cause : '',
    actionEntrep : '',
    materielUse : '',
    username : this.user.username
  }
  

  /*onSubmit(){
    this.crd.AddMaintenance(this.formroup.value).subscribe(()=> {
      console.log('maintence ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/maintenance'));
      },(err)=>{
        console.log(err);
      });
  }*/

  onSubmit(){
    this.crd.AddMaintenance(this.maint).subscribe(()=> {
      console.log('maintence ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/maintenance'));
      },(err)=>{
        console.log(err);
      });
  }

  Annuler(){
    this.router.navigateByUrl('/maintenance')  }

}
