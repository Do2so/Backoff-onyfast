import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private readonly location: Location) { }

  ngOnInit(): void {
  }

  back () {

    this.location.back()

  }

}
