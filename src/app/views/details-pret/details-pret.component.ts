import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalPretComponent } from 'src/app/components/modal-pret/modal-pret.component';
import { OperationsService } from 'src/app/crudservice/operations.service';

@Component({
  selector: 'app-details-pret',
  templateUrl: './details-pret.component.html',
  styleUrls: ['./details-pret.component.scss']
})
export class DetailsPretComponent {

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
    this.crd.GetPretByID(this.getID).subscribe({
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
    const dialogRef = this.dialog.open(ModalPretComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
