import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-details-lien',
  templateUrl: './details-lien.component.html',
  styleUrls: ['./details-lien.component.scss']
})
export class DetailsLienComponent implements OnInit {

  
  Users:any = [];
  getId: any;
  constructor(  
    private activatedroute: ActivatedRoute, 
    private router: Router,
    private crd: OperationsService
  ) { 
    this.getId = this.activatedroute.snapshot.paramMap.get('id');
      this.crd.GetLien(this.getId).subscribe(res => {
        console.log(res)
      });
  }

  download(){
    window.print();
  }

  ngOnInit(): void {
     this.getData()
  }

  public getData() {
    this.crd.GetLien(this.getId).subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

}
