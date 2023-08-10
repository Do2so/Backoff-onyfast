import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalDemandeComponent } from 'src/app/components/modal-demande/modal-demande.component';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss'],
})
export class DetailMessageComponent implements OnInit {

  Users:any ;
  getID: any;
  constructor(
                private activatedroute: ActivatedRoute, 
                private crd: OperationsService,
                public dialog: MatDialog) {
                  this.getID = this.activatedroute.snapshot.paramMap.get('id');
                 }

  ngOnInit(): void {
    this.getData()
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalDemandeComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public getData() {
    this.crd.GetAssuranceByID(this.getID).subscribe({
      next:(data:any) => {
        console.log("ID  ",this.getID)
        console.log(data, typeof(data));
        this.Users=data
      },
      error:() =>{
        console.log('erreur');
      }});
  }

 

  printThisPage(){
    window.print();
  }
}
