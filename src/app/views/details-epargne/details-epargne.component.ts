import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalEpargneComponent } from 'src/app/components/modal-epargne/modal-epargne.component';
import { ModalPretComponent } from 'src/app/components/modal-pret/modal-pret.component';
import { OperationsService } from 'src/app/crudservice/operations.service';
@Component({
  selector: 'app-details-epargne',
  templateUrl: './details-epargne.component.html',
  styleUrls: ['./details-epargne.component.scss']
})
export class DetailsEpargneComponent {
  Users:any ;
  getID: any;
  constructor(
                private activatedroute: ActivatedRoute, 
                private crd: OperationsService,
                public dialog: MatDialog
              ) {
                  this.getID = this.activatedroute.snapshot.paramMap.get('id');
                 }

  ngOnInit(): void {
    this.getData()
  }
  public getData() {
    this.crd.GetEpargneByID(this.getID).subscribe({
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

  openDialog() {
    const dialogRef = this.dialog.open(ModalEpargneComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
