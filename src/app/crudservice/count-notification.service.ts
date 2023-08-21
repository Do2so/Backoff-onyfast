import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface notif{
  id : number,
  content : string,
  read : boolean,
  date : Date
}

@Injectable({
  providedIn: 'root'
})
export class CountNotificationService {

  constructor() { 
    this.countNotifications()
  }

  compteur : any
  filteredNotifications :any
  listeNotif : notif []=[
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


  countNotifications(){
    let count = this.listeNotif.filter(notification => notification.read === false);
    console.log(this.compteur)
    this.compteur = count.length

  }


  
 
  
  markAsRead(alert : notif){
    alert.read = true
    console.log(alert.read)
    this.countNotifications()
  }
  
  filterNotifications(isRead: boolean): void {
    this.filteredNotifications = this.listeNotif.filter(notification => notification.read === isRead);
    console.log(this.filteredNotifications)
    console.log(this.filteredNotifications.length)
    this.countNotifications()
  }
  
  

  showAllNotifications(): void {
    this.filteredNotifications = this.listeNotif;
    console.log(this.filteredNotifications)
  }
  
}
