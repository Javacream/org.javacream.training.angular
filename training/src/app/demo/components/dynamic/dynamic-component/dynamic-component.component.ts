import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import {AlertComponent} from '../alert/alert.component'
@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnDestroy {
  componentRef:ComponentRef<AlertComponent>
  constructor(private resolver: ComponentFactoryResolver){}
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;

  createComponent(type) {
    this.container.clear(); 
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef= this.container.createComponent(factory);
    this.componentRef.instance.type = type;
  }

  ngOnDestroy() {
    this.componentRef?.destroy(); 
   }
}
