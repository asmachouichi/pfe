import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnsiegnantComponent } from './list-ensiegnant.component';

describe('ListEnsiegnantComponent', () => {
  let component: ListEnsiegnantComponent;
  let fixture: ComponentFixture<ListEnsiegnantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEnsiegnantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEnsiegnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
