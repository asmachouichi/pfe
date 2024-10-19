import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDetailsComponent } from './emploi-details.component';

describe('EmploiDetailsComponent', () => {
  let component: EmploiDetailsComponent;
  let fixture: ComponentFixture<EmploiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmploiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
