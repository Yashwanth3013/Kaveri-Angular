import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourtOrderComponent } from './edit-court-order.component';

describe('EditCourtOrderComponent', () => {
  let component: EditCourtOrderComponent;
  let fixture: ComponentFixture<EditCourtOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourtOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourtOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
