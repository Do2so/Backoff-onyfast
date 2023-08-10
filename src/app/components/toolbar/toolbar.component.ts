import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalNotificationComponent } from '../modal-notification/modal-notification.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() inputSidenav!: MatSidenav;

  @Input() public title: string | undefined

  togglerOfMenu:boolean = true

  @Output()

  public menuClickedToOn: EventEmitter<boolean> = new EventEmitter<boolean> (this.togglerOfMenu)

  color: ThemePalette = 'accent';

  public user: any


  constructor( private readonly router: Router, public commonService: CommonService, public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.user = JSON.parse(Object(window.localStorage.getItem('token')))

  }

  toggleMenu () {

    this.menuClickedToOn.emit(!this.togglerOfMenu);

    this.togglerOfMenu = !this.togglerOfMenu

  }

  onDisconnect () {

    window.localStorage.clear()

    this.commonService.isAuth = false

    this.router.navigate([''])

  }

  onProfile(){
    return this.router.navigateByUrl('/profile')
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(ModalNotificationComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  hide = false

  hiden(){
    this.hide = true
  }

}
