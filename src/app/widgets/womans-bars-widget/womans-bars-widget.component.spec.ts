import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomansBarsWidgetComponent } from './womans-bars-widget.component';

describe('WomansBarsWidgetComponent', () => {
  let component: WomansBarsWidgetComponent;
  let fixture: ComponentFixture<WomansBarsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomansBarsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomansBarsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
