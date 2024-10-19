import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiListComponent } from './emploi-list.component';

describe('EmploiListComponent', () => {
  let component: EmploiListComponent;
  let fixture: ComponentFixture<EmploiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmploiListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
