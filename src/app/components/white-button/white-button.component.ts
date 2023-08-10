import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-button',
  templateUrl: './white-button.component.html',
  styleUrls: ['./white-button.component.scss']
})
export class WhiteButtonComponent implements OnInit {

  @Input()
  public icon!: string

  @Input()
  public value: string = 'Ok'

  constructor() { }

  ngOnInit(): void {
  }

}
