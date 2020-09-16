import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-women-bars-widget',
  templateUrl: './women-bars-widget.component.html',
})
export class WomenBarsWidgetComponent implements OnInit, WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
