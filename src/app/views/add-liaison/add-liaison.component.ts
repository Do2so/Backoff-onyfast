import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-add-liaison',
  templateUrl: './add-liaison.component.html',
  styleUrls: ['./add-liaison.component.scss']
})
export class AddLiaisonComponent implements OnInit {

  formroup : FormGroup;
  constructor(
    private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
  ) { 
    this.formroup = this.formbuilder.group({
      libelleLiaison : [''],
      origineLiaison : [''],
      origineLongitude : [''],
      extremiteLongitude : [''],
      longueurLiaison : [''],
      affaiblissment : [''],
      nombreEpissure : [''],
      //dateCreation : [''],
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

  onSubmit(){
    this.crd.AddLiaison(this.formroup.value).subscribe(()=> {
      console.log('liaison ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/liaison'));
      },(err)=>{
        console.log(err);
      });

  }
  Annuler(){
    this.router.navigateByUrl('/liaison')  }

}
