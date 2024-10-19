import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsiegnantComponent } from './ensiegnant.component';

describe('EnsiegnantComponent', () => {
  let component: EnsiegnantComponent;
  let fixture: ComponentFixture<EnsiegnantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnsiegnantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsiegnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
