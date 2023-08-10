import { OperationsService } from 'src/app/crudservice/operations.service';
import * as XLSX from "xlsx";
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-histotique-activite',
  templateUrl: './histotique-activite.component.html',
  styleUrls: ['./histotique-activite.component.scss']
})
export class HistotiqueActiviteComponent {

  Users:any = [];
  
    constructor( private router : Router,
               private crd: OperationsService ) { }

  ngOnInit(): void {
    this.Data()

     
  }

  Data(){
    this.crd.GetUsersActivity().subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data;
      },
      error:(data) =>{
        console.log('erreur');
      }});
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

  dateActivite : any;
  search(){
    if(this.dateActivite==""){
      this.ngOnInit()
    }else{
      this.Users=this.Users.filter((res: { dateActivite: any; }) => {
        return res.dateActivite.toLocaleLowerCase().match(this.dateActivite.toLocaleLowerCase());
      });
    }
  }

  printThisPage(){
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
 

}


