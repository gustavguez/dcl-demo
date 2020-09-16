import { Component, OnInit } from '@angular/core';
import { WidgetComponentInterface } from '../widget-component.interface';

@Component({
  selector: 'app-womans-number-widget',
  templateUrl: './womans-number-widget.component.html',
  styleUrls: ['./womans-number-widget.component.scss']
})
export class WomansNumberWidgetComponent implements OnInit, WidgetComponentInterface {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
