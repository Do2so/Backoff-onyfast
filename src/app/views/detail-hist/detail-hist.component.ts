import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-detail-hist',
  templateUrl: './detail-hist.component.html',
  styleUrls: ['./detail-hist.component.scss']
})
export class DetailHistComponent {

  Users:any=[] ;
  getID: any;
  constructor(
                private activatedroute: ActivatedRoute, 
                private crd: OperationsService) {
                  this.getID = this.activatedroute.snapshot.paramMap.get('id');
                 }

  ngOnInit(): void {
    this.getDataActivity()
  }

  getDataActivity(){
    this.crd.GetOneActivity(this.getID).subscribe({
      next:(data:any) => {
        console.log("ID  ",this.getID)
        console.log(data, typeof(data));
        this.Users=data
      },
      error:() =>{
        console.log('erreur');
      }});
  }

 
 
}
