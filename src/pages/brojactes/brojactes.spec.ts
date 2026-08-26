import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brojactes } from './brojactes';

describe('Brojactes', () => {
  let component: Brojactes;
  let fixture: ComponentFixture<Brojactes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brojactes],
    }).compileComponents();

    fixture = TestBed.createComponent(Brojactes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
