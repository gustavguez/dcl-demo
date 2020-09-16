import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-mens-lines-widget',
  templateUrl: './mens-lines-widget.component.html',
  styleUrls: ['./mens-lines-widget.component.scss']
})
export class MensLinesWidgetComponent implements OnInit , WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
