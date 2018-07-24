import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsdlComponent } from './wsdl.component';

describe('WsdlComponent', () => {
  let component: WsdlComponent;
  let fixture: ComponentFixture<WsdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
