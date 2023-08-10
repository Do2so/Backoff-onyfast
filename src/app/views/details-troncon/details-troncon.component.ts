import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-details-troncon',
  templateUrl: './details-troncon.component.html',
  styleUrls: ['./details-troncon.component.scss']
})
export class DetailsTronconComponent implements OnInit {

  
  getId: any;
  Users:any = [];
  constructor(  private activatedroute: ActivatedRoute, 
                private router: Router,
                private crd: OperationsService,) { 
                  this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetTroncon(this.getId).subscribe(res => {
      console.log(res)
    });
    
      }

  ngOnInit(): void {
    this.getData()
  }

  download(){
    window.print();
  }
  public getData() {
    this.crd.GetTroncon(this.getId).subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

}
