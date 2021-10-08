import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocatsComponent } from './avocats.component';

describe('AvocatsComponent', () => {
  let component: AvocatsComponent;
  let fixture: ComponentFixture<AvocatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvocatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvocatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
