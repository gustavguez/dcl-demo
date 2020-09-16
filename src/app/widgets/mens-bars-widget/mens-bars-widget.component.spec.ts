import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensBarsWidgetComponent } from './mens-bars-widget.component';

describe('MensBarsWidgetComponent', () => {
  let component: MensBarsWidgetComponent;
  let fixture: ComponentFixture<MensBarsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensBarsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensBarsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
