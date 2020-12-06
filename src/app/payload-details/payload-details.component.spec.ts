import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadDetailsComponent } from './payload-details.component';

describe('PayloadDetailsComponent', () => {
  let component: PayloadDetailsComponent;
  let fixture: ComponentFixture<PayloadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayloadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
