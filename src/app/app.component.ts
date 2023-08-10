import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
//import {  } from 'jquery/dist/jquery.slim'
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {


  title = 'Onyfast administration';

  isAuth:boolean | undefined

  constructor (public router: Router, public commonService: CommonService) {}

  ngOnInit(): void {

    // this.isAuth = this.commonService.isAuth

    localStorage.getItem('token') ? this.commonService.isAuth = true: this.commonService.isAuth = false

  }

  ngOnChanges(changes: SimpleChanges): void {

      console.log('[CHANGES]', changes);

  }

  receiveAuthStatus(status: boolean){

    this.isAuth = status

  }
}
