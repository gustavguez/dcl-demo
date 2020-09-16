import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomansNumberWidgetComponent } from './womans-number-widget.component';

describe('WomansNumberWidgetComponent', () => {
  let component: WomansNumberWidgetComponent;
  let fixture: ComponentFixture<WomansNumberWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomansNumberWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomansNumberWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
