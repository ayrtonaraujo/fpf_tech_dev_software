import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clima } from './clima';

describe('Clima', () => {
  let component: Clima;
  let fixture: ComponentFixture<Clima>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clima]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clima);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
