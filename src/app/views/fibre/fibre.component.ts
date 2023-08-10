//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
import * as XLSX from "xlsx";
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-fibre',
  templateUrl: './fibre.component.html',
  styleUrls: ['./fibre.component.scss']
})
export class FibreComponent implements OnInit {

  
  Users:any = [];
  firstLastButtons= true;
  pnDisabled= true;
  hdPageSize= true;
  

  constructor( private router : Router,
               private crd: OperationsService ) {

                }

  ngOnInit(): void {
    this.crd.GetFibres().subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

  
  type : any;
  search(){
    if(this.type==""){
      this.ngOnInit()
    }else{
      this.Users=this.Users.filter((res: { type: any; }) => {
        return res.type.toLocaleLowerCase().match(this.type.toLocaleLowerCase());
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
 
  
  AddTroncon(){
    this.router.navigateByUrl('/addMaintenance')
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer cette suppression?')) {
      this.Users.splice(i, 1);
      this.crd.deleteFibre(id).subscribe((res) => {
        console.log(res)
      });
    }
  }

addFibre(){
  this.router.navigateByUrl('/addFibre');
}




}
