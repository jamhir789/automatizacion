import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XsdComponent } from './xsd.component';

describe('XsdComponent', () => {
  let component: XsdComponent;
  let fixture: ComponentFixture<XsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
