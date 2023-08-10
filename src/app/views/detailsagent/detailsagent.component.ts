import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-detailsagent',
  templateUrl: './detailsagent.component.html',
  styleUrls: ['./detailsagent.component.scss']
})
export class DetailsagentComponent implements OnInit {

  getId: any;
  Users:any = [];
  constructor(  private activatedroute: ActivatedRoute, 
                private router: Router,
                private crd: OperationsService,) { 
                  this.getId = this.activatedroute.snapshot.paramMap.get('id');
    this.crd.GetUser(this.getId).subscribe(res => {
      console.log(res)
    });
    
      }

  ngOnInit(): void {
    this.getData()
  }

  public getData() {
    this.crd.GetUser(this.getId).subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

}
