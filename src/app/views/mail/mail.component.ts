//import { Component, OnInit } from '@angular/core';
import { OperationsService } from './../../crudservice/operations.service';
import { Router } from '@angular/router';
import * as XLSX from "xlsx";
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  Users:any = [];
  firstLastButtons= true;
  pnDisabled= true;
  hdPageSize= true;

  constructor(private router : Router,
              private crd: OperationsService) { }

  ngOnInit(): void {
    this.crd.GetMailsCopie().subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

  page : number = 1;
  count : number  =0;
  tableSize : number =5;
  tableSizes : any = [5,6,9,12];
  previousLabel=true;
  nextLabel =true

  onTableDataChange(event: any){
    this.page = event;
    this.ngOnInit()

  }

  onTableSizeChange(event: any) : void{
    this.tableSize = event.target.value;
    this.page=1;
    this.ngOnInit();
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
  
  adresse: any;
   search(){
     if(this.adresse==""){
       this.ngOnInit()
     }else{
       this.Users=this.Users.filter((res: { adresse: any; }) => {
         return res.adresse.toLocaleLowerCase().match(this.adresse.toLocaleLowerCase());
       });
     }
   }
 

 

  AddMail(){
    this.router.navigateByUrl('/addmail')
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer cette suppression?')) {
      this.Users.splice(i, 1);
      this.crd.deleteMail(id).subscribe((res) => {
        console.log(res)
      });
    }
  }

}
