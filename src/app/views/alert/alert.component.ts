import { Component, OnInit } from '@angular/core';
import { CountNotificationService } from 'src/app/crudservice/count-notification.service';

interface notif{
  id : number,
  content : string,
  read : boolean,
  date : Date
}


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit{

  constructor(private count : CountNotificationService) {}


  ngOnInit(){
    this.filteredNotifications=this.count.listeNotif
  }
  filteredNotifications :any
 /* listeNotif : notif []=[
    {
      id :1,
      content :"Hello World 1! ",
      read :true,
      date :new Date("2020-04-1"),
    },
    {
      id :2,
      content :"Hello World 2! ",
      read :false,
      date :new Date("2020-04-2"),
    },
    {
      id :3,
      content :"Hello World 3! ",
      read :true,
      date :new Date("2020-04-3"),
    },
    {
      id :4,
      content :"Hello World 4! ",
      read :false,
      date :new Date("2020-04-4"),
    }
  ]

 */
  lire(alert : notif){
    this.count.markAsRead(alert)
  }
  /*markAsRead(alert : notif){
    alert.read = true
    console.log(alert.read)
  }*/
  
 filtre(isRead: boolean){
  this.count.filterNotifications(isRead)
 } 
  /*filterNotifications(isRead: boolean): void {
    this.filteredNotifications = this.listeNotif.filter(notification => notification.read === isRead);
    console.log(this.filteredNotifications)
    console.log(this.filteredNotifications.length)
  }*/
  
  
 Tout(){
  this.count.showAllNotifications()
 }
  /*showAllNotifications(): void {
    this.filteredNotifications = this.listeNotif;
    console.log(this.filteredNotifications)
  }*/
}
