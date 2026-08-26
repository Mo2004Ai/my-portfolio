import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abute } from './abute';

describe('Abute', () => {
  let component: Abute;
  let fixture: ComponentFixture<Abute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abute],
    }).compileComponents();

    fixture = TestBed.createComponent(Abute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
