import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewContainerRef } from '@angular/core';
import { EmptyWidgetComponent } from '../widgets/empty-widget/empty-widget.component';
import { WidgetComponentInterface } from '../widgets/widget-component.interface';
import { WidgetDbInterface } from '../widgets/widget-db.interface';
import widgets from '../widgets/widgets';

@Component({
  selector: 'app-widget-loader',
  templateUrl: './widget-loader.component.html',
  styleUrls: ['./widget-loader.component.scss'],
})
export class WidgetLoaderComponent implements OnInit {
  //Inputs
  @Input() widget: WidgetDbInterface;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ){}

  ngOnInit(){
    const componentFactory: any = this.componentFactoryResolver.resolveComponentFactory(
      this.getComponent()
    );
    const componentRef: ComponentRef<WidgetComponentInterface> = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = 'Hi Angular';
  }

  private getComponent(): any {
    if(this.widget.componentId in widgets){
      return widgets[this.widget.componentId];
    } else {
      return EmptyWidgetComponent;
    }
  }
}
