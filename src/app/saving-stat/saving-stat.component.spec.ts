import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingStatComponent } from './saving-stat.component';

describe('SavingStatComponent', () => {
  let component: SavingStatComponent;
  let fixture: ComponentFixture<SavingStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
