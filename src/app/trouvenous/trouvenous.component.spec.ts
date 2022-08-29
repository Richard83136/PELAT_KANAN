import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouvenousComponent } from './trouvenous.component';

describe('TrouvenousComponent', () => {
  let component: TrouvenousComponent;
  let fixture: ComponentFixture<TrouvenousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouvenousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouvenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
