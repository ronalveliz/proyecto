import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailComponent } from './dish-detail.component';

describe('DishDetailComponent', () => {
  let component: DishDetailComponent;
  let fixture: ComponentFixture<DishDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
