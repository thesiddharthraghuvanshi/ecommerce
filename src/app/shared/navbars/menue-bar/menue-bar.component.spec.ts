import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenueBarComponent } from './menue-bar.component';

describe('MenueBarComponent', () => {
  let component: MenueBarComponent;
  let fixture: ComponentFixture<MenueBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenueBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenueBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
