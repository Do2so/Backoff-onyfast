import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-detail-role',
  templateUrl: './detail-role.component.html',
  styleUrls: ['./detail-role.component.scss']
})
export class DetailRoleComponent implements OnInit {

  Users:any = [];
  getId: any;
  constructor(  
    private activatedroute: ActivatedRoute, 
    private router: Router,
    private crd: OperationsService
  ) { 
    this.getId = this.activatedroute.snapshot.paramMap.get('id');
      this.crd.GetRole(this.getId).subscribe(res => {
        console.log(res)
      });
  }

  ngOnInit(): void {
     this.getData()
  }

  public getData() {
    this.crd.GetRole(this.getId).subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

}
