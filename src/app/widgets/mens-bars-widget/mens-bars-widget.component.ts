import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-mens-bars-widget',
  templateUrl: './mens-bars-widget.component.html',
  styleUrls: ['./mens-bars-widget.component.scss']
})
export class MensBarsWidgetComponent implements OnInit, WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
