import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-men-bars-widget',
  templateUrl: './men-bars-widget.component.html',
})
export class MenBarsWidgetComponent implements OnInit, WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
