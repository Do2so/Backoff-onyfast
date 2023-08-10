import { Component, OnInit } from '@angular/core';

interface budget{
  puissance : number,
  sensibilite : number
}


interface bilan{
  pc : number,
  nc : number,
  pi : number,
  pt : number,
  ne : number,
  long : number,
  marge : number
}


@Component({
  selector: 'app-feuille-calculs',
  templateUrl: './feuille-calculs.component.html',
  styleUrls: ['./feuille-calculs.component.scss']
})
export class FeuilleCalculsComponent implements OnInit {

  Budg: budget={
    puissance : 0,
    sensibilite :0
  }

  
  Cal : bilan ={
    pc : 0,
    nc : 0,
    pi : 0,
    pt : 0,
    ne : 0,
    long : 0,
    marge : 0
  }
  constructor() { }

  ngOnInit(): void {
  }


  budget(){
    let res = this.Budg.puissance - this.Budg.sensibilite;
    alert("Le budget optique est égal à : " +res+ " DB ")
  }

  bilanLiaison(){
    
    let res= (this.Cal.pc * this.Cal.nc) + (this.Cal.pi * this.Cal.pt) + (this.Cal.ne * this.Cal.long) + this.Cal.marge;
    alert("Le bilan de liaison est égal à : " +res+ " dBm ");
  }

}
