import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';


@Component({
  selector: 'app-addmail',
  templateUrl: './addmail.component.html',
  styleUrls: ['./addmail.component.scss']
})
export class AddmailComponent implements OnInit {

  formroup : FormGroup;
  constructor(  private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone) {
      this.formroup = this.formbuilder.group({
        adresse : [''],
        contenu : [''],
      })
     }

  ngOnInit(): void {
  }

  onSubmit(){
    this.crd.AddMail(this.formroup.value).subscribe(()=> {
      console.log('maintence ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/mail'));
      },(err)=>{
        console.log(err);
      });
  }

  Annuler(){
    this.router.navigateByUrl('/mail')  }

}
