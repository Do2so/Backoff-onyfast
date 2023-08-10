import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';


@Component({
  selector: 'app-details-liaison',
  templateUrl: './details-liaison.component.html',
  styleUrls: ['./details-liaison.component.scss']
})
export class DetailsLiaisonComponent implements OnInit {

  Users:any = [];
  getId: any;
  constructor( 
                private activatedroute: ActivatedRoute, 
                private router: Router,
                private crd: OperationsService
             ) { 
      this.getId = this.activatedroute.snapshot.paramMap.get('id');
      this.crd.GetLiaison(this.getId).subscribe(res => {
        console.log(res)
      });
    }

  ngOnInit(): void {
    this.getData()
  }

  public getData() {
    this.crd.GetLiaison(this.getId).subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

  download(){
    window.print();
  }

}
