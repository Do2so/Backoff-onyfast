import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-details-fibre',
  templateUrl: './details-fibre.component.html',
  styleUrls: ['./details-fibre.component.scss']
})
export class DetailsFibreComponent implements OnInit {

  
  Users:any = [];
  getId: any;
  constructor(  
    private activatedroute: ActivatedRoute, 
    private router: Router,
    private crd: OperationsService
  ) { 
    this.getId = this.activatedroute.snapshot.paramMap.get('id');
      this.crd.GetFibre(this.getId).subscribe(res => {
        console.log(res)
      });
  }

  ngOnInit(): void {
     this.getData()
  }

  public getData() {
    this.crd.GetFibre(this.getId).subscribe({
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
