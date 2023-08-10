import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent implements OnInit {

  formroup : FormGroup;
  constructor(  private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone) {
      this.formroup = this.formbuilder.group({
        libelle : [''],
        description : [''],
        etat : ['']
      })
     }

  ngOnInit(): void {
  }

  onSubmit(){
    this.crd.AddService(this.formroup.value).subscribe(()=> {
      console.log('maintence ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/service'));
      },(err)=>{
        console.log(err);
      });
  }

  Annuler(){
    this.router.navigateByUrl('/service')  }


}
