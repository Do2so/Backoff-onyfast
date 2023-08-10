import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent {

  Users:any ;
  card:any;
  getID: any;
  constructor( 
                private activatedroute: ActivatedRoute, 
                private crd: OperationsService,
             ) { 
      this.getID = this.activatedroute.snapshot.paramMap.get('id');
      
    }

  ngOnInit(): void {
    this.getData()
    this.getBalance()
  }

  printThisPage(){
    window.print();
  }

  public getData() {
    this.crd.GetUserByID(this.getID).subscribe({
      next:(data:any) => {
        console.log("ID  ",this.getID)
        console.log(data, typeof(data));
        this.Users=data
      },
      error:() =>{
        console.log('erreur');
      }});
  }

  public getBalance() {
    this.crd.GetBalance(this.getID).subscribe({
      next:(data:any) => {
        console.log("ID  ",this.getID)
        console.log(data, typeof(data));
        this.card=data
      },
      error:() =>{
        console.log('erreur');
      }});
  }

  download(){
    window.print();
  }
}
