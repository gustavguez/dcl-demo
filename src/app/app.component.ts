import { Component, OnInit } from '@angular/core';
import { WidgetDbInterface } from './widgets/widget-db.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //Models
  widgets: WidgetDbInterface[];

  //Inject any service
  constructor() {}

  //On component init
  ngOnInit(): void {
    //Create widgets array after fetch to API
    this.widgets = [
      { componentId: 'men-bars' },
      { componentId: 'men-lines' },
      { componentId: 'women-bars' },
      { componentId: 'women-number' },
      {},
      {},
    ];
  }
}
