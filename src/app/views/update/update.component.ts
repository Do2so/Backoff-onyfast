import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OperationsService } from './../../crudservice/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  Users : any;
  constructor(private router : Router,
    private crd: OperationsService) { }

ngOnInit(): void {
this.crd.GetMessagesCopie().subscribe({
next:(data:any) => {
console.log(data, typeof(data));
this.Users=data
},
error:(data) =>{
console.log('erreur');
}});
}


  

}
