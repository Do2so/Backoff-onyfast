import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
//import {  } from 'jquery/dist/jquery.slim'
import { CommonService } from './services/common.service';
import { SERVER_URL } from './urls';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {


  title = 'Onyfast administration';

  isAuth:boolean | undefined
  socket: any;

  constructor (
    public router: Router, 
    public commonService: CommonService
    ) {
      this.socket = io(`${SERVER_URL}`);
      this.emitMessage ()
    }

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

  private emitMessage () {
    this.socket.emit('Notifications', "Emitting message from application");

    this.socket.on('chat message', function(msg: string) {
      console.log ("In coming message: ", msg)
    });
  }
}
