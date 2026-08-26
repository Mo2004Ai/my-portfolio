import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thances } from './thances';

describe('Thances', () => {
  let component: Thances;
  let fixture: ComponentFixture<Thances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thances],
    }).compileComponents();

    fixture = TestBed.createComponent(Thances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
