import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(
    private readonly router: Router,
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  onDisconnect () {

    window.localStorage.clear()

    this.commonService.isAuth = false

    this.router.navigate([''])

  }
  
}
