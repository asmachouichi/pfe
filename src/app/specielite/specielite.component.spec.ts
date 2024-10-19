import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieliteComponent } from './specielite.component';

describe('SpecieliteComponent', () => {
  let component: SpecieliteComponent;
  let fixture: ComponentFixture<SpecieliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecieliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecieliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
