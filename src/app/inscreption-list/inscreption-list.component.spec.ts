import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreptionListComponent } from './inscreption-list.component';

describe('InscreptionListComponent', () => {
  let component: InscreptionListComponent;
  let fixture: ComponentFixture<InscreptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscreptionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscreptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
