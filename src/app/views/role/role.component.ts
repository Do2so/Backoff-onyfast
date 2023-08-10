//import { Component, OnInit } from '@angular/core';
import { OperationsService } from './../../crudservice/operations.service';
import { Router } from '@angular/router';
import * as XLSX from "xlsx";
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  Users:any = [];
  firstLastButtons= true;
  pnDisabled= true;
  hdPageSize= true;

  constructor(private router : Router,
              private crd: OperationsService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.crd.GetRoles().subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
      },
      error:(data) =>{
        console.log('erreur');
      }});
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
  
  libelle: any;
   search(){
     if(this.libelle==""){
       this.ngOnInit()
     }else{
       this.Users=this.Users.filter((res: { libelle: any; }) => {
         return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase());
       });
     }
   }
 
  AddRole(){
    this.router.navigateByUrl('/AddRole')
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer cette suppression?')) {
      this.Users.splice(i, 1);
      this.crd.deleteRole(id).subscribe((res) => {
        console.log(res)
      });
    }
  }


  //pagination
  page : number = 1;
  count : number  =0;
  tableSize : number =6;
  tableSizes : any = [3,6,9,12];
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


  showToast() {
    this.toastrService.success('Bonjour !')
  }

}
