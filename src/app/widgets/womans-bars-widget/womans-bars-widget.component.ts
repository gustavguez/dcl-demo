import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-womans-bars-widget',
  templateUrl: './womans-bars-widget.component.html',
  styleUrls: ['./womans-bars-widget.component.scss']
})
export class WomansBarsWidgetComponent implements OnInit , WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
