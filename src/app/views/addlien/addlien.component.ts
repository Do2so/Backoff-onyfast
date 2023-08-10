import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-addlien',
  templateUrl: './addlien.component.html',
  styleUrls: ['./addlien.component.scss']
})
export class AddlienComponent implements OnInit {

   
  formroup : FormGroup;

  constructor(  private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone ) { 
      this.formroup = this.formbuilder.group({
        libelle : [''],
        puissanceEmise : [''],
        type : [''],
        typeMultiplexage : [''],
        puissanceRecu : [''],
        typeService : [''],
        longueurOnde : [''],
        //detailFibre : [''],
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.crd.AddLien(this.formroup.value).subscribe(()=> {
      console.log('fibre  ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/lien'));
      },(err)=>{
        console.log(err);
      });
  }

  Annuler(){
    this.router.navigateByUrl('/lien')  }



}
