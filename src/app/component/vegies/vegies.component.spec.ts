import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegiesComponent } from './vegies.component';

describe('VegiesComponent', () => {
  let component: VegiesComponent;
  let fixture: ComponentFixture<VegiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
