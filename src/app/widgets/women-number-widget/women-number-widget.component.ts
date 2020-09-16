import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-women-number-widget',
  templateUrl: './women-number-widget.component.html',
})
export class WomenNumberWidgetComponent implements OnInit, WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
