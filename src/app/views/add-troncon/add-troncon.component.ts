import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-add-troncon',
  templateUrl: './add-troncon.component.html',
  styleUrls: ['./add-troncon.component.scss']
})
export class AddTronconComponent implements OnInit {

  formroup : FormGroup;

  constructor(  private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone ) { 
      this.formroup = this.formbuilder.group({
        libelleTroncon : [''],
        origineTroncon : [''],
        origineLongitude : [''],
        extremiteLongitude : [''],
        longueurTroncon : [''],
        extremiteTroncon: [''],
        origineLatitude : [''],
        extremiteLatitude : [''],
        capaciteTroncon : [''],
        description : [''],
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.crd.AddTroncon(this.formroup.value).subscribe(()=> {
      console.log('maintence ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/troncon'));
      },(err)=>{
        console.log(err);
      });
  }

  Annuler(){
    this.router.navigateByUrl('/troncon')  }


}
