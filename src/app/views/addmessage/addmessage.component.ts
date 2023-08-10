import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
import { CommonService } from 'src/app/services/common.service';

interface message{
  numero:number,
  contenu:string,
  username:string
}
@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.scss']
})
export class AddmessageComponent implements OnInit {
  //formroup : FormGroup;
  public user: any=[];

  constructor(  private router: Router,
    private crd: OperationsService,
    public formbuilder : FormBuilder,
    private ngzone: NgZone,
    public commonService: CommonService) {
      /*this.formroup = this.formbuilder.group({
        numero : [''],
        contenu : [''],
        username : ['']
      })*/
     }

     public ms:message={
      numero:0,
      contenu:'',
      username:this.user.username
     }

  ngOnInit(): void {
    this.user = JSON.parse(Object(window.localStorage.getItem('token')));
    this.ms.username=this.user.username
    console.log(this.ms.numero,this.ms.username)
  }

 /* onSubmit(){
    this.crd.AddMessage(this.formroup.value).subscribe(()=> {
      console.log('maintence ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/message'));
      },(err)=>{
        console.log(err);
      });
  }*/

  onSubmit(){
    this.crd.AddMessage(this.ms).subscribe(()=> {
      console.log('message ajouté');
      this.ngzone.run(()=>
        this.router.navigateByUrl('/message'));
      },(err)=>{
        console.log(err);
      });
  }

  Annuler(){
    this.router.navigateByUrl('/message')  }

}
