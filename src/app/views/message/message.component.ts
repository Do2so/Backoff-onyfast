//import { Component, OnInit } from '@angular/core';
import { OperationsService } from './../../crudservice/operations.service';
import { Router } from '@angular/router';
import * as XLSX from "xlsx";
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDemandeComponent } from 'src/app/components/modal-demande/modal-demande.component';




declare var window: any;



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  Users:any = [];
  name : string ="";
  state=false;
  
  
  constructor(private router : Router,
              private crd: OperationsService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Data();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )
  }



public Data(){
  this.crd.GetMessagesCopie().subscribe({
    next:(data:any) => {
      console.log(data, typeof(data));
      this.Users=data
    },
    error:(data) =>{
      console.log('erreur');
    }});
}

openModal_v1(){
  this.formModal.show()
}
formModal:any;

openDialog() {
  const dialogRef = this.dialog.open(ModalDemandeComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}



  imprimer(){
    window.print();
  }
  
  @ViewChild("table") table: ElementRef<HTMLInputElement> = {} as ElementRef;
  
  fireEvent() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    var fmt = "0.00";
    var range = { s: { r: 1, c: 1 }, e: { r: 2, c: 100000 } };
    for (var R = range.s.r; R <= range.e.r; ++R) {
      for (var C = range.s.c; C <= range.e.c; ++C) {
        var cell = ws[XLSX.utils.encode_cell({ r: R, c: C })];
        if (!cell || cell.t != "n") continue; 
        cell.z = fmt;
      }
    }
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    var fmt = "@";
    wb.Sheets["Sheet1"]["F"] = fmt;
    XLSX.writeFile(wb, "SheetJS.xlsx");
  }
  
  demandeType : any;
  search(){
    if(this.demandeType==""){
      this.ngOnInit()
    }else{
      this.Users=this.Users.filter((res: { demandeType: any; }) => {
        return res.demandeType.toLocaleLowerCase().match(this.demandeType.toLocaleLowerCase());
      });
    }
  }
 
 

  AddMessage(){
    this.router.navigateByUrl('/addMessage')
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer cette suppression?')) {
      this.Users.splice(i, 1);
      this.crd.deleteMessage(id).subscribe((res) => {
        console.log(res)
      });
    }
  }

  detail(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer Afficher cet utilisateur?')) {
      this.crd.GetMessage(id).subscribe((res) => {
        this.Users.values();
      });
    }
  }

  prev=true;
  next=true;
  page : number = 1;
  count : number  = 0;
  tableSize : number = 6;
  tableSizes : any = [6,12,18,24];
 

  onTableDataChange(event: any){
    this.page = event;
    this.Data()

  }

  onTableSizeChange(event: any) : void{
    this.tableSize = event.target.value;
    this.page=1;
    this.Data();
  }


  //Test GTP Pagination
  TotalUser :any


}
