//import { donutChartOptions } from './../Donut/donutChartOptions';
import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
//import { Chart } from 'angular-highcharts'
import { OperationsService } from './../../crudservice/operations.service';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
//import {barChartOptions} from '../graph/barChartOptions';

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  number: number  =  0
  number1 : number = 0
  number2 : number = 0

  accent = '\u00e9'

  Users!: any;

  Cal : bilan ={
    pc : 0,
    nc : 0,
    pi : 0,
    pt : 0,
    ne : 0,
    long : 0,
    marge : 0
  }

  bilanLiaison(){
    
    let res= (this.Cal.pc * this.Cal.nc) + (this.Cal.pi * this.Cal.pt) + (this.Cal.ne * this.Cal.long) + this.Cal.marge;
    alert(res);
  }

 public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution des effectifs'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['2019', '2020', '2021', '2022'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Utilisateurs',
      data: [ 947, 1402, 3634, 5268]
  }, {
      name: 'Liaisons',
      data: [ 408, 547, 729, 628]
  }, 
  {
    name: 'Maintenances',
    data: [ 408, 547, 600, 7000]
}
,{
      name: 'départements ',
      data: [ 156, 339, 818, 1201]
  }]
  }

  public options2: any = {
    chart :{
        type: 'bar'
    },
    credits :{
        enabled: false
    },
    title : {
        text : 'Observations de la croissance mensuelle'
    },
    yAxis : {
        visible :false
    },
    legend : {
        enabled  :false
    },
    xAxis : {
        lineColor : '#fff',
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
    },
    plotOptions : {
        series : {
            borderRadius : 5,
        } as any
    },
    series : [
        {
            type : 'bar',
            color : 'green',
            data : [
                {y : 2.9},
                {y : 7.9},
                {y : 4.9},
                {y : 10.9},
                {y : 11.9, color : '#004dff'},
                {y : 1.9},
                {y : 5.9},
                {y : 12.9,color : '#004dff'},
                {y : 10.9},
                {y : 13.9, color: 'red'},
                {y : 15.9, color:'red'},
                {y : 17.9, color: '#fc58'},
            ],
        },
    ],

}

 

public options3 : any ={
  chart : {
      type : 'pie',
      plotShadow : false
  },
  credits : {
      enabled : false,
  },
  plotOptions :{
      pie: {
          innerSize : '90%',
          borderWidth: 40,
          borderColor: '',
          slicedOffset : 20,
          dataLabels : {
              connectorWidth : 0
          }
      }
  },
  title : {
      verticalAlign : 'middle',
      floating : true,
      text : ''
      },
      legend : {
          enabled : false
      },
      series : [
          {
              type : 'pie',
              data : [
                  {
                      name:'Enregistrement', y:1, color:'gray'
                  },
                  {
                      name:'prets', y:2, color:'green'
                  },
                  {
                      name:'Assurance', y:3, color:'blue'
                  },
                  {
                      name:'Epargne', y:4, color:'yellow'
                  },
                  {
                      name:'Transactions', y:5, color:'indigo'
                  },
                  
              ]
          }
      ]
};

TotalUser : any
TotalAssurance :any;
TotalTransaction:any;
TotalPret : any;
  //donutChart = new Chart(donutChartOptions);

  constructor(private router : Router,
    private crd: OperationsService) { }

    //les graphes a bar
    //barChart = new Chart(barChartOptions)



    

  ngOnInit(): void {

     Highcharts.chart('container', this.options);
     Highcharts.chart('container2', this.options2);
     Highcharts.chart('container3', this.options3);

     this.crd.GetUsersCopie().subscribe({
      next:(data:any) => {
        console.log(data, typeof(data));
        this.Users=data;
        this.TotalUser = data.length;
        console.log("nombre de client",this.TotalUser)
      },
      error:(data) =>{
        console.log('erreur');
      }});
      //Total assurance
      this.crd.GetMessagesCopie().subscribe({
        next:(data:any) => {
          console.log(data, typeof(data));
          this.Users=data
          this.TotalAssurance=data.length
        },
        error:(data) =>{
          console.log('erreur');
        }});
        //Total transaction
        this.crd.GetUsersActivity().subscribe({
          next:(data:any) => {
            console.log(data, typeof(data));
            this.Users=data;
            this.TotalTransaction=data.length
          },
          error:(data) =>{
            console.log('erreur');
          }});
          //Total prèt
          this.crd.GetMailsCopie().subscribe({
            next:(data:any) => {
              console.log(data, typeof(data));
              this.Users=data;
              this.TotalPret=data.length
            },
            error:(data) =>{
              console.log('erreur');
            }});


  this.getData()
  this.getData1()
  this.getData2()
  


  }
  public getData() {
    this.crd.GetNumberMessage().subscribe({
      next:(data:any) => {
        console.log("NUMBER", data, typeof(data));
        const {nombre} = data[0]
        this.number=nombre
      },
      error:(data) =>{
        console.log('Erreur de count number');
      }});
  }

  public getData1() {
    this.crd.GetNumberMail().subscribe({
      next:(data:any) => {
        console.log("NUMBER", data, typeof(data));
        const {nombre} = data[0]
        this.number1=nombre
      },
      error:(data) =>{
        console.log('Erreur de count number');
      }});
  }

  public getData2() {
    this.crd.GetNumberMaintenance().subscribe({
      next:(data:any) => {
        console.log("NUMBER", data, typeof(data));
        const {nombre} = data[0]
        this.number2=nombre
      },
      error:(data) =>{
        console.log('Erreur de count number');
      }});
  }

  

}


