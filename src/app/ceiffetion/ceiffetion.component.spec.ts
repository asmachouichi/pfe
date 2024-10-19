import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeiffetionComponent } from './ceiffetion.component';

describe('CeiffetionComponent', () => {
  let component: CeiffetionComponent;
  let fixture: ComponentFixture<CeiffetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeiffetionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeiffetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
