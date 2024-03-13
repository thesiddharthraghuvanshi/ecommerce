import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBarComponent } from './filters-bar.component';

describe('FiltersBarComponent', () => {
  let component: FiltersBarComponent;
  let fixture: ComponentFixture<FiltersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
