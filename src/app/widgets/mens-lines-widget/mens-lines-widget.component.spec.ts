import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensLinesWidgetComponent } from './mens-lines-widget.component';

describe('MensLinesWidgetComponent', () => {
  let component: MensLinesWidgetComponent;
  let fixture: ComponentFixture<MensLinesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensLinesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensLinesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
