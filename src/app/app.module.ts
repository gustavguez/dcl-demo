import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WomansBarsWidgetComponent } from './widgets/womans-bars-widget/womans-bars-widget.component';
import { MensBarsWidgetComponent } from './widgets/mens-bars-widget/mens-bars-widget.component';
import { WomansNumberWidgetComponent } from './widgets/womans-number-widget/womans-number-widget.component';
import { MensLinesWidgetComponent } from './widgets/mens-lines-widget/mens-lines-widget.component';
import { WidgetLoaderComponent } from './widget-loader/widget-loader.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WomansBarsWidgetComponent,
    MensBarsWidgetComponent,
    WomansNumberWidgetComponent,
    MensLinesWidgetComponent,
    WidgetLoaderComponent,
    EmptyWidgetComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [
    //No es necesario Angular 9
    //https://angular.io/guide/deprecations#entrycomponents-and-analyze_for_entry_components-no-longer-required
    
    // WomansBarsWidgetComponent,
    // MensBarsWidgetComponent,
    // WomansNumberWidgetComponent,
    // MensLinesWidgetComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
