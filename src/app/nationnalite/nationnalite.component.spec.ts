import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationnaliteComponent } from './nationnalite.component';

describe('NationnaliteComponent', () => {
  let component: NationnaliteComponent;
  let fixture: ComponentFixture<NationnaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NationnaliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
