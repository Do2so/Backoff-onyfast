import { OperationsService } from './../../crudservice/operations.service';
import { Router } from '@angular/router';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

//import * as html2pdf from 'html2pdf.js'
import * as XLSX from "xlsx";






@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  Users:any = [];
  nombreUsers = 0
  selectedValue: string='';
  selectedCar: string='';
  formroup : FormGroup;
  pgIndex= 2;
  firstLastButtons= true;
  pnDisabled= true;
  hdPageSize= true;
  //@ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(private router : Router,
              private crd: OperationsService,
              public formbuilder : FormBuilder,
              private ngzone: NgZone,) { 

                this.formroup = this.formbuilder.group({
                  nom : [''],
                  prenom : [''],
                  email : [''],
                  genre : [''],
                  telephone : [''],
                  type : [''],
                  etat : [''],
                  idService : [''],
                  idMail : [''],
                  idMessage : [''],
                  idRole : ['']
                })
              }

  ngOnInit(): void {
    this.getData()
  }

 


  nom : any;
  search(){
    if(this.nom==""){
      this.ngOnInit()
    }else{
      this.Users=this.Users.filter((res: { nom: any; }) => {
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      });
    }
  }

  //pagination
  page : number = 1;
  count: number = 1;
  tableSize : number = 6;
  tableSizes : any = [3, 6, 9, 12];

  onTableDataChange(event: any){
    this.page = event;
    this.getData();
  }

  onTableSizeChange(event : any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData();
  }




  public getData() {
    this.crd.GetUsers().subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data
        this.nombreUsers = data.length
      },
      error:(data) =>{
        console.log('erreur');
      }});
  }

 

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer cette suppression?')) {
      this.Users.splice(i, 1);
      this.crd.deleteAgent(id).subscribe((res) => {
        console.log(res)
        // this.getData()
      });
    }
  }

  

  detail(id:any, i:any) {
    console.log(id);
    if(window.confirm('Voulez vous continuer Afficher cet utilisateur?')) {
      this.crd.detailAgent(id).subscribe((res) => {
        this.Users.values();
      });
    }
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


  Adduser(){
    this.router.navigateByUrl('/adduser');
  }

  Annuler(){
    this.router.navigateByUrl('/agent');
  }
  

  /*download(){
        var element = document.getElementById('table');
        var opt = {
          margin:1,
          filename:'Agent.pdf',
          image: { type: 'png', quality: 0.98 },
          html2canvas:{ scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
  }*/
 /* download(){
    let data = document.getElementById('table');
    html2canvas(data).then(canvas =>{
      let docWidth = 208;
      let docHeight = canvas.height*docWidth/canvas.width;

      const contentDataURL= canvas.toDataURL('image/png')
      let doc = new jsPDF('p','mm','a4');
      let position = 0;
      doc.addImage(contentDataURL,'PNG',0,position,docWidth,docHeight)
      doc.save('Agent.pdf');
    })
  }*/
  

  printThisPage() {
    window.print();
  }

 /* onChangePage(pe:PageEvent) {
    console.log(pe.pageIndex);
    console.log(pe.pageSize);
  }

  ngAfterViewInit() {
    this.getData().paginator = this.paginator;
  } */
  
key: string= 'id';
reverse: boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
