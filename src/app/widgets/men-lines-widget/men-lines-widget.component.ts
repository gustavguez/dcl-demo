import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-men-lines-widget',
  templateUrl: './men-lines-widget.component.html',
})
export class MenLinesWidgetComponent implements OnInit , WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
